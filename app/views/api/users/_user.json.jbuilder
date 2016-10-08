json.extract! user, :id, :username, :email, :name
json.reviews user.reviews do |review|
  json.(review, :id, :rating, :description, :created_at, :beer_id)
end
json.rev_count user.reviews.length
