json.array!(@sections) do |section|
  json.title section[:title]
  json.beers section[:beers] do |beer|
    json.id beer.id
    json.name beer.name
    json.brewery beer.brewery.name
  end
  json.breweries section[:breweries] do |brewery|
    json.id brewery.id
    json.name brewery.name
    json.location brewery.location
  end
end
