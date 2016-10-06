json.extract! @beer, :id, :name, :brewery_id, :style, :abv, :ibu, :description
json.brewery do
  @beer.brewery
end
