json.extract! @beer, :id, :name, :style, :abv, :ibu, :description
json.brewery(@beer.brewery, :id, :name)
json.reviews @beer.reviews do |review|
  json.(review, :id, :rating, :description, :beer_id, :author_id)
  json.created_at time_ago_in_words(review.created_at)
  json.author_name review.author.name
  json.beer_name @beer.name
  json.brewery @beer.brewery, :id, :name
end
json.rev_count @beer.reviews.length
json.avg_rating @beer.overall_rating
