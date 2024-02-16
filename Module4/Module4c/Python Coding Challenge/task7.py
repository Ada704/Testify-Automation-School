def descending_array(arr):
    arr.sort(reverse=True)
    return arr


countries = ["cape verde", "dubai", "rwanda", "paris"]
sorted_array = descending_array(countries)
print("Original array:", countries)
print("Sorted array in descending order:", sorted_array)
