numbers = [5, 3, 4, 6, 8, 5, 7, 2, 7, 8, 1, 2]

# i. Generate a new list containing all unique numbers in ascending order
unique_numbers = sorted(set(numbers))

# ii. Compute the sum of all numbers in the list
sum_of_numbers = sum(numbers)

# iii. Identify the second smallest number in the list
second_smallest = sorted(set(numbers))[1]

# Print the results
print("Unique numbers in ascending order:", unique_numbers)
print("Sum of all numbers:", sum_of_numbers)
print("Second smallest number:", second_smallest)
