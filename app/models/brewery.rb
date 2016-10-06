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

end
