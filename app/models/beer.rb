# == Schema Information
#
# Table name: beers
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  brewery_id  :integer          not null
#  style       :string
#  abv         :float
#  ibu         :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Beer < ActiveRecord::Base

  validates :name, :brewery_id, presence: true

  belongs_to :brewery,
    class_name: "Brewery",
    foreign_key: :brewery_id,
    primary_key: :id

  has_many :reviews

  def overall_rating
    total = 0;
    if self.reviews.length > 0
      self.reviews.each do |review|
        total += review.rating
      end
    else
      return 0
    end
    return (total / self.reviews.length).round(2)
  end

  def self.top_rated_beers
    rated = {}
    Beer.all.each do |beer|
      rated[beer.name] = {rating: beer.overall_rating, beer_id: beer.id}
    end
    rated.sort_by {|k, v| v[:rating]}.reverse.take(20).to_h
  end

  def top_drinkers
    drinkers = Hash.new({count: 0, beer_id: 0})
    self.reviews.each do |review|
      name = review.author.name
      drinkers[name] = {count: drinkers[name][:count] + 1, user_id: review.author.id}
    end
    drinkers.sort_by {|k, v| v[:count]}.reverse.take(20).to_h
  end

  def user_reviews(user)
    count = 0
    self.reviews.each do |review|
      if review.author_id == user.id
        count += 1
      end
    end
    count 
  end

end
