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

  def follows_array
    self.follows.map {|follow| follow.follow_id }
  end

  def follows?(user)
    return true if self.follows_array.include?(user.id)
    false
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
