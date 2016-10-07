json.extract! @beer, :id, :name, :style, :abv, :ibu, :description
json.brewery(@beer.brewery, :id, :name)
json.reviews @beer.reviews do |review|
  json.(review, :id, :rating, :description, :created_at, :beer_id)
end 
