# User Input
number = input("Enter a number for multiplication table: ")
range_limit = input("Enter the range (how many multiples): ")

# Validation
if not number.isdigit() or not range_limit.isdigit():
    print("Please enter valid numbers.")
else:
    number = int(number)
    range_limit = int(range_limit)

    # Generate Multiplication Table
    print(f"\nMultiplication Table for {number} (up to {range_limit} multiples):")
    for i in range(1, range_limit + 1):
        result = number * i
        print(f"{number} x {i} = {result}")

"""STEP-1: Start

Prompt user for number and range_limit.
STEP-2: Validation

If number or range_limit is not a valid integer, print an error and go to STEP-6.
Convert number and range_limit to integers.
STEP-3: Multiplication Table Generation

Print header for multiplication table.
For each i in the range from 1 to range_limit + 1, print number * i.
STEP-4: Stop

Display the multiplication table for number and range_limit.
STEP-5: Error Handling

Print an error message if input validation fails.
STEP-6: End"""