
json.array!(@reviews) do |review|
  json.extract!(review, :id, :description, :rating, :beer_id, :author_id)

  json.created_at time_ago_in_words(review.created_at)

  json.beer_name review.beer.name
  json.author_name review.author.name
  json.author_avatar asset_url(review.author.image.url)
  json.brewery review.beer.brewery, :id, :name
  json.image_url asset_url(review.image.url)

  json.comments review.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.review_id comment.review_id
    json.username comment.user.username
    json.created_at time_ago_in_words(comment.created_at)
  end

end
