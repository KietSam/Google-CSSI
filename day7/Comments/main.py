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

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_vars = { 'comments' : [] }
        main = jinja_environment.get_template("templates/main.html")
        self.response.write(main.render(template_vars))

class CommentHandler(webapp2.RequestHandler):
    def post(self):
        counter = 1
        stored_comment = []
        while True:
            tmp_comment = self.request.get('stored_comment_' + str(counter))
            if len(tmp_comment) == 0:
                break
            stored_comment = stored_comment + [tmp_comment]
            counter += 1

        comment = self.request.get('comment')
        template_vars = { 'comments' : stored_comment + [comment]}
        main = jinja_environment.get_template("templates/main.html")
        self.response.write(main.render(template_vars))



jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/addcomment', CommentHandler)
], debug=True)
