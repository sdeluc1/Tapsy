
json.array!(@reviews) do |review|
  json.extract!(review, :id, :description, :rating)

  json.created_at time_ago_in_words(review.created_at)
  
  json.beer(review.beer, :name, :id, :brewery_id)
  json.author(review.author, :username, :id, :name)
  json.brewery review.beer.brewery, :name
end
