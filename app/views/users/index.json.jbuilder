json.array! @users do |users|
  json.id users.id
  json.title users.title
  json.image users.image_url
  json.detail users.detail
end