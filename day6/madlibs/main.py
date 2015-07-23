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

class MainHandler(webapp2.RequestHandler):
    def get(self):
        entry = jinja_environment.get_template("templates/entry.html")
        self.response.write(entry.render())

class ResponseHandler(webapp2.RequestHandler):
    def post(self):
        team_members = {'Amber': {'college' : "Slow"},
        'Nancy' : {'college' : "Scripps"},
        'Sean' : {'college' : "univ of somewhere near cali"},
        'Shu-Ying' : {'college' : "UW Seattle"}}
        dict_words = { "pluralnoun1" : "",
        "adjective" : "",
        "location" : "",
        "vehicle" : "",
        "location2" : "",
        "worlds_first" : "",
        "second_vehicle" : "",
        "location3" : "",
        "adjective2" : "",
        "team_members" : ""}
        for keys in dict_words:
            dict_words[keys] = self.request.get(keys)
        dict_words["team_members"] = team_members
        response = jinja_environment.get_template("templates/response.html")
        self.response.write(response.render(dict_words))

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/response', ResponseHandler)
], debug=True)
