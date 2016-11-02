json.extract! @user, :id, :username, :email, :name

json.avatar asset_url(@user.image.url)

json.reviews @user.reviews do |review|
  json.(review, :id, :rating, :description, :beer_id, :author_id)
  json.created_at time_ago_in_words(review.created_at)
  json.author_name @user.name
  json.brewery review.beer.brewery, :id, :name
  json.beer_name review.beer.name
end

json.rev_count @user.reviews.length
json.unique_count @user.num_unique_reviews

json.follows_arr @user.follows_array

json.follows @user.follows do |follow|
  json.id follow.id
  json.follow_id follow.follow_id
  json.user_id follow.user_id
end

json.num_followed @user.num_followed
json.num_followers @user.num_followers

json.followed_reviews @user.followed_reviews do |review|
  json.(review, :id, :rating, :description, :beer_id, :author_id)
  json.created_at time_ago_in_words(review.created_at)
  json.author_name @user.name
  json.brewery review.beer.brewery, :id, :name
  json.beer_name review.beer.name
end
