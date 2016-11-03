json.extract! @brewery, :id, :name, :location, :brewery_type, :description
json.beers @brewery.beers do |beer|
  json.(beer, :id, :name)
end

json.top_drinkers @brewery.top_drinkers
json.overall_rating @brewery.overall_rating
json.num_ratings @brewery.num_ratings
json.num_beers @brewery.num_beers

json.created_at time_ago_in_words(@brewery.created_at)

json.user_reviews @user_reviews
