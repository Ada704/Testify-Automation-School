def filter_negative_numbers(numbers):

    result = [num for num in numbers if num >= 0]

    return result


numbers = [189, -2, 33, -88, 100, -6, 7]
print(filter_negative_numbers(numbers))
