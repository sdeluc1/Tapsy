json.extract! @beer, :id, :name, :style, :abv, :ibu, :description
json.brewery(@beer.brewery, :id, :name)
json.reviews @beer.reviews do |review|
  json.(review, :id, :rating, :description, :created_at, :beer_id, :author_id)
  json.author_name review.author.name
  json.brewery @beer.brewery, :id, :name
end
