json.array! @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.user_id comment.user_id
  json.review_id comment.review_id
  json.username comment.user.username
end
