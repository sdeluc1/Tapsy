json.extract! @review, :id, :description, :rating
json.beer(@review.beer, :name, :id)
json.author(@review.author, :username, :id)
