
json.extract! @review, :id, :description, :rating, :created_at
json.beer(@review.beer, :name, :id, :brewery_id)
json.author(@review.author, :username, :id, :name)
json.brewery(@review.beer.brewery, :name)
json.created_at time_ago_in_words(@review.created_at)
json.author_count @review.author.reviews.length
json.image_url @review.image.url
