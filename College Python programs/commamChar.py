# Get user input for two strings
string1 = input("Enter the first string: ")
string2 = input("Enter the second string: ")

# Convert strings to sets of characters
set1 = set(string1)
set2 = set(string2)

# Find the intersection (common characters) between the sets
common_characters = set1.intersection(set2)

# Count the occurrences of common characters in both strings
count = sum(min(string1.count(char), string2.count(char)) for char in common_characters)

# Print the count of common characters
print(f"Count of common characters: {count}")
