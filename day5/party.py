def get_guests():
    guestList = []
    print "Hello who would you like to add to the guest list?"
    while (True):
        input = raw_input()
        if input == "":
            break
        guestList.append(input)
    return guestList

def say(arr, str):
    for a in arr:
        print "{0}, {1}".format(str, a)

def inflate_balloons():
    print "The balloons are inflated."

def start_music():
    print "I want it that way"

def cheer(num):
    for a in range(1, num):
        if a%3 == 0:
            print "Hooray"
        elif a%2 == 0 or a%1 == 0:
            print "Hip"

def party():
    guests = get_guests()
    say(guests, "Hello")
    inflate_balloons()
    start_music()
    cheer(8)
    say(guests, "Goodbye")

party()
