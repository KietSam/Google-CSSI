class Fruit:
    name = ""
    poisonous = False

    def __init__(self, nameOfFruit, willIDie):
        self.name = nameOfFruit
        self.poisonous = willIDie

    def describe(self):
        print self.name

f1 = Fruit("Apple", True)
f2 = Fruit("Banana", False)

f1.describe()
f2.describe()               
