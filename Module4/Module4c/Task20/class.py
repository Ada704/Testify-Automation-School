class Human:
    def __init__(self):
        self.leg_count = 4

    def get_gender(self):
        return "Unknown"


class Man(Human):
    pass


class Woman(Human):
    pass


# Instantiate the classes Man and Woman
man = Man()
woman = Woman()

# Print out the values of the get_gender() method for each object instance
print(man.get_gender())
print(woman.get_gender())
