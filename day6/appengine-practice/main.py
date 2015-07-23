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
from time import time, sleep
import math
import random
import logging
import jinja2
import os
import time

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_vars = {"timeofday" : time.asctime(),
        "filepath" : os.path.dirname(__file__),
        "somevalue" : 1.0}
        template = jinja_environment.get_template("templates/hello.html")
        self.response.write(template.render(template_vars))
        self.response.write("Hello world")
        self.response.write("<br>")
        self.response.write('<a href="/add?firstNum=23&secondNum=7"> Add 23 and 7 </a>')

class FormHandler(webapp2.RequestHandler):
    def post(self):
        name = self.request.get('name', value="friend")
        if (len(name) == 1):
            self.response.write("NO NAME")
        else:
            self.response.write('It worked! ' + name)
    def get(self):
        name = self.request.get('name')
        self.response.write('It worked! ' + name)

class CountHandler(webapp2.RequestHandler):
    def get(self):
        startValue = self.request.GET['startValue']
        self.response.write(startValue)
        for i in range(int(startValue), 101):
            self.response.write(i)
            self.response.write(" ")
            num = self.request.get('name?')

class SnakeHandler(webapp2.RequestHandler):
    def get(self):
        size = 16
        wave_width = 5;
        a = 1
        text = ""
        character = "O"
        character_length = len(character)
        forward = True
        counter = 1
        for ge in range(1,1000):
            c = wave_width - (size - a) if (wave_width - (size - a)) > 0 else 1
            if counter <= c:
                for x in range(a, size):
                    for z in range(0, character_length):
                        text = text + "-"
                for x in range(0, a):
                    text = text + character
                for x in range(0, a):
                    text = text + character
                self.response.write(text)
                self.response.write("<br>")
                counter = counter + 1
            else:
                counter = 1
                if forward:
                    a = a + 1
                else:
                    a = a - 1
                if a == size:
                    forward = False
                elif a == 1:
                    forward = True
            text = ""

class AddHandler(webapp2.RequestHandler):
    def get(self):
        firstNum = self.request.GET['firstNum']
        secondNum = self.request.GET['secondNum']
        logging.info("FIRST NUMBER: " + firstNum)
        logging.warning("SECOND NUMBER: " + secondNum)
        logging.error("SECOND NUMBER: " + secondNum)
        logging.fatal("SECOND NUMBER: " + secondNum)
        self.response.write(str(firstNum) + " " + str(secondNum) + " ")
        self.response.write("<br/>")
        self.response.write(firstNum)
        self.response.write("+")
        self.response.write(secondNum)
        self.response.write("=")
        self.response.write(str(int(firstNum) + int(secondNum)))

class MultiplyHandler(webapp2.RequestHandler):
    def get(self):
        firstNum = self.request.GET['firstNum']
        secondNum = self.request.GET['secondNum']
        self.response.write(str(firstNum) + " " + str(secondNum) + " ")
        self.response.write("<br/>")
        self.response.write(firstNum)
        self.response.write("*")
        self.response.write(secondNum)
        self.response.write("=")
        self.response.write(str(float(firstNum) * float(secondNum)))

class PowerHandler(webapp2.RequestHandler):
    def get(self):
        firstNum = self.request.GET['firstNum']
        secondNum = self.request.GET['secondNum']
        self.response.write(str(firstNum) + " " + str(secondNum) + " ")
        self.response.write("<br>")
        self.response.write(firstNum)
        self.response.write("^")
        self.response.write(secondNum)
        self.response.write("=")
        self.response.write(pow(float(firstNum), float(secondNum)))

class ModuloHandler(webapp2.RequestHandler):
    def get(self):
        firstNum = self.request.GET['firstNum']
        secondNum = self.request.GET['secondNum']
        self.response.write(str(firstNum) + " " + str(secondNum) + " ")
        self.response.write("<br/>")
        self.response.write(firstNum)
        self.response.write("%")
        self.response.write(secondNum)
        self.response.write("=")
        self.response.write(str(int(firstNum) - int(firstNum)/int(secondNum) * int(secondNum)))



jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/count', CountHandler),
    ('/snake', SnakeHandler),
    ('/add', AddHandler),
    ('/multiply', MultiplyHandler),
    ('/power', PowerHandler),
    ('/modulo', ModuloHandler),
    ('/formhandler', FormHandler)
], debug=True)
