class Human:

    name = "Chioma"
    group = "Homosapiens"

    def get_name_group(self):
        return self.name + ":" + self.group


honda = Human()
print(honda.name, honda.group, honda.get_name_group())
