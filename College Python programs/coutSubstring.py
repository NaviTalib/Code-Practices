def count_substring():
    # Input the original string
    original_string = input("Enter the original string: ")

    # Input the substring
    substring = input("Enter the substring: ")

    # Count occurrences of the substring in the original string
    count = original_string.count(substring)

    # Print the result
    print(f"Count of '{substring}' in '{original_string}': {count}")

# Test the function
count_substring()
