def submitWords ():
    words = {}
    print "Hello, please feed me words. type stop() to stop"
    while True:
        input = raw_input()
        if input == "stop()":
            break
        if input in words:
            words[input] = words[input]+1
            print "The word " + input + " has been seen " + str(words[input]) + " times"
        else:
            words[input] = 1
            print "That's a new word LOL"
    return words
def searchWords (arr):
    while True:
        print "Hello, what words would you like to search for? type stop() to stop"
        input = raw_input()
        if input == "stop()":
            break
        if input in arr:
            print "The word " + input + " has been seen " + str(arr[input]) + " times"
submitWords()
#searchWords(test)
