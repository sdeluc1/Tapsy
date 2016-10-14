
json.extract! @review, :id, :description, :rating, :created_at, :beer_id
json.beer(@review.beer, :name, :id, :brewery_id)
json.beer_name @review.beer.name
json.author(@review.author, :username, :id, :name)
json.brewery(@review.beer.brewery, :name, :id)
json.created_at time_ago_in_words(@review.created_at)
json.author_count @review.author.reviews.length
json.image_url asset_url(@review.image.url)

json.comments @review.comments do |comment|
  json.id comment.id
  json.body comment.body
  json.user_id comment.user_id
  json.review_id comment.review_id
  json.username comment.user.username
  json.created_at time_ago_in_words(comment.created_at)
end
