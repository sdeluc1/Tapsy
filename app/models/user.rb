# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, default_url: "https://s3.amazonaws.com/tapsy-pro/users/default_avatar.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :reviews,
    class_name: "Review",
    foreign_key: :author_id,
    primary_key: :id

  has_many :follows,
    class_name: "Follow",
    foreign_key: :user_id,
    primary_key: :id

  has_many :followings,
    through: :follows

  has_many :comments

  def follows_array
    self.follows.map {|follow| follow.follow_id }
  end

  def num_unique_reviews
    result = []
    ids = []
    self.reviews.each do |review|
      unless ids.include?(review.beer_id)
        ids << review.beer_id
        result << review
      end
    end
    result.length
  end

  def num_followed
    self.followings.length
  end

  def num_followers
    users = User.all.includes(:follows)
    count = 0
    users.each do |user|
      count += 1 if user.follows_array.include?(self.id)
    end
    count
  end

  def followed_reviews
    reviews = []
    self.followings.each do |following|
      reviews = reviews.concat(following.reviews)
    end
    reviews
  end

  def top_checkins
    checkins = Hash.new({count: 0, beer_id: 0})
    self.reviews.includes(:beer).each do |review|
      name = review.beer.name
      checkins[name] = {count: checkins[name][:count] + 1, beer_id: review.beer.id}
    end
    checkins.sort_by {|k, v| v[:count]}.reverse.take(20).to_h
  end

  def self.find_by_credentials(username, password)
   user = User.find_by(username: username)
   return nil if user.nil?
   user.is_password?(password) ? user : nil
  end

  def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
   BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
   self.session_token = SecureRandom::urlsafe_base64
   self.save!
   self.session_token
  end

  private
  def ensure_session_token
   self.session_token ||= SecureRandom::urlsafe_base64
  end

end
