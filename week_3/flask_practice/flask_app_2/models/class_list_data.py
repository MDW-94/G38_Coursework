from models.class_file import Person

# how to be careful using the word class on its own
# Python knew what I meant when I defined the file with _file
# this could be that distinguishable names is important so as not to confuse locating files

person1 = Person("Samantha", 25, 5.11)
person2 = Person("Harry", 27, 6.3)
person3 = Person("Carl", 35, 6.5)
person4 = Person("Madeline", 23, 5.4)

people = [person1, person2, person3, person4]

# now we've defined our data and passed it into our classes
# here we've created a list of people and stored thheir info into a list
