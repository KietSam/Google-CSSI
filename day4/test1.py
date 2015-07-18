a = 0
b = 1
temp = 0
#for x in range(1,100):
#    print a,
#    if x % 10 == 0:
#        print ""
#    temp = a
#    a = b
#    b = temp + a

#associative arrays
asso = {'Matt' : 'Front of Room', 'Some name': 'some thing associated'}
for a in asso:
    print a

#input
print input()
print raw_input()

#check if something is in another thing
print 'Matt' in asso
print 'Mat' in asso
asso['Matt'] = 'Mat'
print 'Mat' in asso

#add a variable to the array
asso ['test'] = 'this is a test'
print asso['Matt']

#sorting a dictionary
d1 = {"Z" : 1, "M" : 10, "A" : 100}
d1
sorted(d1)
sorted(d1.keys())
d1.keys()
d1.values()
sorted(d1.keys())
sorted(d1.keys(), key=d1.get)
