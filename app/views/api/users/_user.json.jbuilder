json.extract! user, :id, :username, :email, :name
json.reviews user.reviews do |review|
  json.(review, :id, :rating, :description, :beer_id, :author_id)
  json.created_at time_ago_in_words(review.created_at)
  json.author_name user.name
  json.brewery review.beer.brewery, :id, :name
  json.beer_name review.beer.name
  json.image_url review.image.url
end

json.rev_count user.reviews.length
json.unique_count user.num_unique_reviews

json.follows_arr user.follows_array

json.follows user.follows do |follow|
  json.id follow.id
  json.follow_id follow.follow_id
end

json.curr_follow current_user.follows?(user)
