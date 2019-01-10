from imgurpython import ImgurClient
client_id = '80a6eef5aa2bb73'
client_secret = 'fd6b0b666c450a219de0b43d49ab6e014e4636cd'

client = ImgurClient(client_id, client_secret)

a = client.upload_from_path("test.jpg")
print a["link"]

# Example request
#items = client.gallery()
#print type(items)
#for item in items:
#    print(item.link)
