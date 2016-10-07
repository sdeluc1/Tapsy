# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :float            not null
#  description :text
#  author_id   :integer          not null
#  beer_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
