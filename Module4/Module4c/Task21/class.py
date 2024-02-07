class Human:
    def __init__(self):
        self.leg_count = 4

    def get_gender(self):
        return "Unknown"


class Man(Human):

    def get_gender(self):
        return "Man"


class Woman(Human):

    def get_gender(self):
        return "Woman"


# Instantiate the classes Man and Woman
man = Man()
woman = Woman()

print(man.get_gender())
print(woman.get_gender())
