#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
from google.appengine.api import users
from google.appengine.ext import ndb
import urllib2
import json
import logging
import datetime
import unicodedata

class User(ndb.Model):
    name = ndb.StringProperty()
    birthday = ndb.DateProperty()
    created_date = ndb.DateTimeProperty(required=False)
    created_date = datetime.datetime.now()

class Temperature(ndb.Model):
    temperature = ndb.FloatProperty()
    latitude = ndb.FloatProperty()
    longitude = ndb.FloatProperty()
    created = ndb.DateTimeProperty()

class Post(ndb.Model):
    username = ndb.StringProperty()
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    text_body = ndb.StringProperty()
    likes = ndb.IntegerProperty()
    dislikes = ndb.IntegerProperty()

class Comment(ndb.Model):
    username = ndb.StringProperty()
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    text_body = ndb.StringProperty()


class MainHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            greeting = ("Welcome, %s! (<a href=%s>sign_out</a>)" %
            (user.nickname(), users.create_logout_url('/')))
        else:
            greeting = ("<a href=%s> Sign in or register </a>." % users.create_login_url('/profile'))
        self.response.write("<html> <body> %s </body> </html>" % greeting)

class PostHandler(webapp2.RequestHandler):
    def post(self):
        # update the blog
        post = Post(username="Splenda", text_body="Sugar is sweet.", likes=0, dislikes=1, comments=[""])
        post.put()

    def get(self):
        # displays all the posts
        # a box for a new post (if you are a signed in user)
        post = Post(username="Splenda", text_body="Sugar is sweet.", likes=0, dislikes=1, comments=[""])
        post.put()
        posts = Post.query().fetch()
        template = jinja_environment.get_template('templates/posts.html')
        template_vars = {'posts' : posts}
        self.response.write(template.render(template_vars))


class ProfileHandler(webapp2.RequestHandler):
    def get(self):
        main = jinja_environment.get_template("templates/index.html")
        self.response.write(main.render())

class GiffyHandler(webapp2.RequestHandler):
    def get (self):
        giffy_template = jinja_environment.get_template("templates/giffy.html")
        self.response.write(giffy_template.render())

class ImageHandler(webapp2.RequestHandler):
    def post(self):
        giffy_template = jinja_environment.get_template("templates/giffy.html")
        image_template = jinja_environment.get_template("templates/giffy-images.html")
        terms = self.request.get("terms")
        working = True
        s = set()
        url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + terms.replace(" ", "+")
        logging.fatal(url)
        for i in range(10):
            string = urllib2.urlopen(url)
            bigdict = json.loads(string.read())
            if len(bigdict["data"]) == 0:
                working = False
                break
            photo_url = bigdict["data"]["image_url"]
            s.add(photo_url)
        giffy_var = {"url" : s, "terms" : terms.upper()}
        if working:
            self.response.write(image_template.render(giffy_var))
        else:
            self.response.write(giffy_template.render())
            self.response.write("There were no images matching your search terms.")



class WeatherHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/weather.html')
        template_vars = getData(self)
        if type(template_vars["temperature"]) is float:
            latitude = template_vars["latitude"]
            longitude = template_vars["longitude"]
            logging.fatal(latitude + " " + longitude)
            temp = Temperature(temperature=template_vars["temperature"], latitude=float(latitude), longitude=float(longitude), created=datetime.datetime.now())
            temp.put()
        self.response.write(template.render(template_vars))

class UserHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/user.html')
        user = User(name="Ian")
        user.put()
        query = User.query()
        self.response.write(template.render())

def getData(self):
    #Get Lat and Lon from javascript
    lat = self.request.get('lat')
    lon = self.request.get('lon')
    #Creating url from the api request
    url = "http://api.openweathermap.org/data/2.5/weather?lat=%s&lon=%s&units=imperial" % (lat, lon)
    #fire a request to the url, turn the response to a string
    string = urllib2.urlopen(url).read()
    #turning the string into a python dictionary
    dict = json.loads(string)
    if lat == "" and lon == "":
        temperature = "Waiting for temperature data"
        form = True
    else:
        temperature = dict["main"]["temp"]
        form = False
    return {'temperature' : temperature, "city" : dict["name"], "form": form, "latitude" : lat, "longitude": lon}

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/profile', ProfileHandler),
    ('/giffy', GiffyHandler),
    ('/giffy-images', ImageHandler),
    ('/weather', WeatherHandler),
    ('/user', UserHandler),
    ('/posts', PostHandler)
], debug=True)
