# json.array! @beers do |beer|
#
#   json.reviews beer.reviews do |review|
#     json.(review, :id, :rating, :description, :beer_id, :author_id)
#     json.created_at time_ago_in_words(review.created_at)
#     json.author_name review.author.name
#     json.beer_name beer.name
#     json.brewery beer.brewery, :id, :name
#     json.image_url review.image.url
#   end
#
# end
#

json.top_beers @top_beers
