json.array! @breweries do |brewery|

  json.extract! brewery, :id, :name, :location, :brewery_type, :description

end
