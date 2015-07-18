#! /usr/bin/python
#
# A program to analyze the text of Alice in Wonderland and do
# interesting things with the data.
import string

#len(dict.keys)

def getDictOfUniqueWords (text):
    words = text.replace("--", " ")
    words = words.split()
    uniqueWords = {}
    for a in words:
        lower = a.lower()
        lower = lower.strip(string.punctuation)
        if lower in uniqueWords:
            uniqueWords[lower] = uniqueWords[lower]+1
        else:
            uniqueWords[lower] = 1
    return uniqueWords

def getSortedWords (uniqueWords):
    values = sorted(uniqueWords, key=uniqueWords.get)
    values.reverse()
    return values

def getSortedNumbers (words, uniqueWords):
    keys = []
    for a in words:
        keys.append(uniqueWords[a])
    return keys # Change me!

def getSortedPercentages (sortedNumbers):
    totalWords = getTotalWords(sortedNumbers)
    percentages = []
    for a in sortedNumbers:
        percentages.append((a*1.0)/totalWords)
    return percentages

def getTotalWords (sortedNumbers):
    sum = 0
    for a in sortedNumbers:
        sum += a
    return sum

def frequentlyUsed (value, startFromHighest, sortedDict):
    start = "most" if startFromHighest else "least"
    print "The top {0} {1} used frequently-used words in the text are:".format(value, start)
    count = 0
    if not startFromHighest:
        sortedDict.reverse()
    for a in sortedDict:
        count+=1
        print "#{0}: {1}".format(count, a)
        if count == value:
            break

def getTimesAppeared (word, sortedDict):
    index = sortedDict[0].index(word.lower())
    return "The word '{0}' has appeared {1} times.".format(word, sortedDict[1][index])

def main():
    # Open the file, read it into memory as a single string.
    with open('alice_in_wonderland.txt') as alice_file:
        alice_text = alice_file.read()

    dictOfUniqueWords = getDictOfUniqueWords(alice_text)
    sortedWords = getSortedWords(dictOfUniqueWords)
    sortedNumbers = getSortedNumbers(sortedWords, dictOfUniqueWords)
    sortedPercentages = getSortedPercentages(sortedNumbers)
    sortedDict = [sortedWords, sortedNumbers, sortedPercentages]
    print sortedNumbers
    print 'Unique words: ', len(sortedWords)
    frequentlyUsed(10, True, list(sortedWords))
    frequentlyUsed(10, False, list(sortedWords))
    print getTotalWords(sortedNumbers)
    print getTimesAppeared("Alice", sortedDict)
    print getTimesAppeared("Wonderland", sortedDict)


if __name__ == '__main__':
  main()
