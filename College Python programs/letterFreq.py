# Get user input for a string
user_input = input("Enter a string: ")

# Convert the string to lowercase
lowercase_input = user_input.lower()

# Initialize a dictionary to store letter frequencies
letter_freq = {}

# Iterate through each character in the string
for char in lowercase_input:
    if char.isalpha():
        letter_freq[char] = letter_freq.get(char, 0) + 1

# Print the letter frequencies
print("Letter Frequencies:")
for letter, count in letter_freq.items():
    print(f"{letter}: {count}")
