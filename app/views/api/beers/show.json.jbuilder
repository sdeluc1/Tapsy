json.extract! @beer, :id, :name, :style, :abv, :ibu, :description
json.brewery(@beer.brewery, :id, :name)
json.reviews @beer.reviews do |review|
  json.(review, :id, :rating, :description, :beer_id, :author_id)
  json.created_at time_ago_in_words(review.created_at)
  json.author_name review.author.name
  json.beer_name @beer.name
  json.brewery @beer.brewery, :id, :name
  json.image_url review.image.url

  json.comments review.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.review_id comment.review_id
    json.username comment.user.username
    json.created_at time_ago_in_words(comment.created_at)
  end


end
json.rev_count @beer.reviews.length
json.avg_rating @beer.overall_rating

json.top_drinkers @beer.top_drinkers

json.created_at time_ago_in_words(@beer.created_at)
