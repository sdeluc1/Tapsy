json.extract! @beer, :id, :name, :style, :abv, :ibu, :description
json.brewery(@beer.brewery, :id, :name)

json.rev_count @beer.reviews.length
json.avg_rating @beer.overall_rating

json.top_drinkers @beer.top_drinkers

json.created_at time_ago_in_words(@beer.created_at)
json.user_reviews @user_reviews
