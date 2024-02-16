def vowel_count(string):
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

    count = sum(1 for char in string if char in vowels)

    return count


print(vowel_count("I am a great Tester"))
