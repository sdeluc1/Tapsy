json.extract! @brewery, :id, :name, :location, :brewery_type, :description
json.beers @brewery.beers do |beer|
  json.(beer, :id, :name)
  json.reviews beer.reviews do |review|
    json.(review, :id, :rating, :description, :beer_id, :author_id)
    json.beer_name beer.name
    json.author_name review.author.name
    json.brewery @brewery, :id, :name
    json.created_at time_ago_in_words(review.created_at)
  end
end
