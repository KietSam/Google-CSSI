import urllib2
import json

url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=timelapse"
string = urllib2.urlopen(url)
bigdict = json.loads(string.read())
print bigdict["data"]["image_url"]
