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
import urllib2
import json
import logging

class MainHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            greeting = ("Welcome, %s! (<a href=%s>sign_out</a>)" %
            (user.nickname(), users.create_logout_url('/')))
        else:
            greeting = ("<a href=%s> Sign in or register </a>." % users.create_login_url('/profile'))
        self.response.write("<html> <body> %s </body> </html>" % greeting)

class ProfileHandler(webapp2.RequestHandler):
    def get(self):
        main = jinja_environment.get_template("templates/index.html")
        self.response.write(main.render())

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

class GiffyHandler(webapp2.RequestHandler):
    def get (self):
        giffy_template = jinja_environment.get_template("templates/giffy.html")
        self.response.write(giffy_template.render())


jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/profile', ProfileHandler),
    ('/giffy', GiffyHandler),
    ('/giffy-images', ImageHandler)
], debug=True)
