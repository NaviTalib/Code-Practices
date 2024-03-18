from functools import reduce

# Take user input for the list
arr_input = input("Enter elements of the list separated by space: ")
arr = list(map(int, arr_input.split()))

# Find the maximum element using reduce and max function
max_element = reduce(lambda x, y: max(x, y), arr)

# Calculate the sum of elements using reduce and sum function
sum_of_elements = reduce(lambda x, y: x + y, arr)

# Print the original list, maximum element, and sum of elements
print("Original list:", arr)
print("Maximum element:", max_element)
print("Sum of elements:", sum_of_elements)
