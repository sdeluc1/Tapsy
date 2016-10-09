
json.array!(@reviews) do |review|
  json.extract!(review, :id, :description, :rating, :beer_id, :author_id)

  json.created_at time_ago_in_words(review.created_at)

  # json.beer(review.beer, :name, :id, :brewery_id)
  # json.author(review.author, :username, :id, :name)
  # json.brewery review.beer.brewery, :name

  json.beer_name review.beer.name
  json.author_name review.author.name
  json.brewery review.beer.brewery, :id, :name
end
