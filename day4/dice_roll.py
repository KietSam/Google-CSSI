import random

NUM_DICE_ROLLS = 5

#print "Rolling the dice " + str(NUM_DICE_ROLLS) + " times."
def roller ():
    times = 0
    roll1 = 0
    roll2 = 0
    gotDoubleSixes = False
    while not gotDoubleSixes:
        roll1 = random.randint(1, 6)
        roll2 = random.randint(1, 6)
        times += 1
        #print "try: " + str(times) + " Rolled", roll1, roll2
        if (roll1 == roll2 == 6):
            print "Got double sixes!"
            gotDoubleSixes = True

        if (roll1 == roll2 == 1):
            print "Got snake eyes!"
    return times

def getRollerStats (repeat):
    sumOfRolls = 0.0
    for a in range(1,repeat):
        sumOfRolls += roller()
    print "The average # of rolls from " + str(repeat) + " rolls is " + str(sumOfRolls/repeat)

#roller()
getRollerStats(100000)
