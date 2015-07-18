import random
#This is a comment
if 6 < 7:
    print "hello"
    print "Hello2"
a = True
b = True
if a:
    if b:
        print "2"
    print "1"

def sales_tax (subtotal, tax_rate):
    return subtotal * tax_rate
print sales_tax(100, 0.10)

def fizzBuzz (num):
    print "FizzBuzz"  if num%15 == 0 else "Buzz" if num%5 == 0 else "Fizz" if num%3 == 0 else ""
    #if num%15 == 0:
    #    print "FizzBuzz"
    #elif num%3 == 0:
    #    print "Fizz"
    #elif num%5 == 0:
    #    print "Buzz"

myList = [1, 2, 3, 'a', 'b', 'c', True, False]
for x in myList:
    print x
i = 0
while i < 1:
    print i
    i+=1

for a in range(100):
    a+=1
    print a

#fizzBuzz(3)
#fizzBuzz(2.9999999)
#fizzBuzz(5)
#fizzBuzz(15)
