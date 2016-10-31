json.array!(@beers) do |beer|
  json.extract!(beer, :id, :name)
end
