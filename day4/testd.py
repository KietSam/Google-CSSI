ask for words <--- array
search the words <--- string

def submitWords ():
    words = {}

    while True:
        print "Hi add words now. Say stop() if you want to stop."
        input = raw_input()

        if input in words:
            words[input] = words[input] + 1
        words[input] = 1
    return words

def searchWords ():
