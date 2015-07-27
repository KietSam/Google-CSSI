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
import logging
import random

class MainHandler(webapp2.RequestHandler):
    def get(self):
        main = jinja_environment.get_template("templates/index.html")
        self.response.write(main.render())

def create_layout (width, height, bombs):
    if bombs > (width * height):
        return "ERROR: MORE BOMBS THAN THERE ARE BOXES"
    while True:
        counter = 0
        layout = []
        for y in range(height):
            temp_row = []
            for x in range(width):
                if random.randint(1, width*height) <= bombs:
                    temp_row += ['1']
                    counter += 1
                else:
                    temp_row += ["0"]
            layout.append(temp_row)
        if counter == bombs:
            break
    return {"layout" : layout, "width" : width, "height" : height, "bombs" : bombs}

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
