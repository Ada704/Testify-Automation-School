
person = {
    "name": "Jane Doe",
    "skin colour": "brown",
    "hair colour": "black",
    "weight(kg)": 75
}
print(person)

person.update({"name": "Richard Benson", "weight": 69})
print("updated list:", person)

person.pop("hair colour")
print(person)

name = person.get("name")
print(name)

person_keys = person.keys()
print(person_keys)

person_items = person.items()
print(person_items)

