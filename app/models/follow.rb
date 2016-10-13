# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  follow_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ActiveRecord::Base

  validates :user_id, :follow_id, presence: true

  belongs_to :user
  belongs_to :following,
    class_name: "User",
    foreign_key: :follow_id,
    primary_key: :id

end
