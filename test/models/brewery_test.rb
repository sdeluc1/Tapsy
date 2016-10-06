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

require 'test_helper'

class BreweryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
