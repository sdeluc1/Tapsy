# == Schema Information
#
# Table name: reviews
#
#  id                 :integer          not null, primary key
#  rating             :float            not null
#  description        :text
#  author_id          :integer          not null
#  beer_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Review < ActiveRecord::Base

  validates :rating, :author_id, :beer_id, presence: true
  has_attached_file :image, default_url: "https://s3.amazonaws.com/tapsy-pro/reviews/images/genericbeercan.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :beer
  has_many :comments

end
