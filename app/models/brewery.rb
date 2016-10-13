# == Schema Information
#
# Table name: breweries
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  location     :string           not null
#  brewery_type :string
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Brewery < ActiveRecord::Base

  validates :name, :location, presence: true

  has_many :beers

  has_many :reviews,
    through: :beers

  def top_drinkers
    drinkers = Hash.new({count: 0, beer_id: 0})
    self.reviews.each do |review|
      name = review.author.name
      drinkers[name] = {count: drinkers[name][:count] + 1, user_id: review.author.id}
    end
    drinkers.sort_by {|k, v| v[:count]}.reverse.take(20).to_h
  end

end
