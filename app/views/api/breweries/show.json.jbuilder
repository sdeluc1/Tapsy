json.extract! @brewery, :id, :name, :location, :brewery_type, :description
json.beers @brewery.beers do |beer|
  json.(beer, :id, :name)
end
