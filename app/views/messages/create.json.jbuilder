json.id @message.id
json.user_name @message.user.name
json.date @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @message.content
json.image @message.image.url

# json.(@message, :content, :image)
# json.created_at @message.created_at
# json.user_name @message.user_name
# json.id @message.id