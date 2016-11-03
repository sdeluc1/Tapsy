json.extract! @user, :id, :username, :email, :name

json.avatar asset_url(@user.image.url)

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
