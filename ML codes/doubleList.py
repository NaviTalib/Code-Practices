# Take user input for the list
arr_input = input("Enter elements of the list separated by space: ")
arr = list(map(int, arr_input.split()))

# Double each element in the list using map and lambda function
doubled_list = list(map(lambda x: x * 2, arr))

# Print the original and doubled lists
print("Original list:", arr)
print("Doubled list:", doubled_list)
