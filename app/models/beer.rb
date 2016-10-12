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
    self.reviews.each do |review|
      total += review.rating
    end
    return total / self.reviews.length if self.reviews.length > 0
    0
  end

  def top_drinkers
    drinkers = Hash.new(0)
    self.reviews.each do |review|
      drinkers[review.author.name] += 1
    end
    drinkers
  end

end
