class Follow < ActiveRecord::Base

  validates :user_id, :follow_id, presence: true

  belongs_to :user

end
