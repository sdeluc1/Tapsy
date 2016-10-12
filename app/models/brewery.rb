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
    drinkers = Hash.new(0)
    self.reviews.each do |review|
      drinkers[review.author.name] += 1
    end
    drinkers.sort_by {|k, v| v}.reverse.take(20).to_h
  end

end
