# Take input from the user
character = input("Enter a character: ")


if len(character) == 1 and character.isalpha():

    character = character.lower()


    if character in 'aeiou':
        print(f"{character} is a vowel.")
    else:
        print(f"{character} is a consonant.")
else:
    print("Please enter a valid single letter.")
