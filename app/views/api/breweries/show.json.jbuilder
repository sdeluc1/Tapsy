json.extract! @brewery, :id, :name, :location, :brewery_type, :description
json.beers @brewery.beers do |beer|
  json.(beer, :id, :name)
  # json.reviews beer.reviews do |review|
  #   json.(review, :id, :rating, :description, :beer_id, :author_id)
  #   json.beer_name beer.name
  #   json.author_name review.author.name
  #   json.brewery @brewery, :id, :name
  #   json.created_at time_ago_in_words(review.created_at)
  #   json.image_url review.image.url
  #
  #   json.comments review.comments do |comment|
  #     json.id comment.id
  #     json.body comment.body
  #     json.user_id comment.user_id
  #     json.review_id comment.review_id
  #     json.username comment.user.username
  #     json.created_at time_ago_in_words(comment.created_at)
  #   end
  #
  # end
end

json.top_drinkers @brewery.top_drinkers
json.overall_rating @brewery.overall_rating
json.num_ratings @brewery.num_ratings
json.num_beers @brewery.num_beers

json.created_at time_ago_in_words(@brewery.created_at)

json.user_reviews @user_reviews
