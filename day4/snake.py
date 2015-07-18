from time import time, sleep
import math
import random

def printWeirdCircle (char, width, siz, interval):
    x_hours = 0.125
    y_seconds = interval
    end_time = time() + x_hours * 3600 # time() is calculated in seconds
    size = siz
    wave_width = width;
    a = 1
    text = ""
    character = char
    character_length = len(character)
    forward = True
    counter = 1
    while time() < end_time:
        c = wave_width - (size - a) if (wave_width - (size - a)) > 0 else 1
        #if counter <= c:
        for x in range(a, size):
            for z in range(0, character_length):
                text = text + " "
        for x in range(0, a):
            text = text + character
        for x in range(0, a):
            text = text + character
        print text
        counter = counter + 1
        #else:
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
        sleep(y_seconds * 1/c)
printWeirdCircle("O", 5, 16, 0.2)
