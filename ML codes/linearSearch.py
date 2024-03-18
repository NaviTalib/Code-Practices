def linear_search(arr, x):
    """
    Perform linear search to find the index of element x in array arr.
    
    Parameters:
    arr (list): List of elements to search through.
    x: Element to search for.
    
    Returns:
    int: Index of the element if found, -1 otherwise.
    """
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

# Take user input for the list
arr = input("Enter elements of the list separated by space: ").split()
arr = [int(x) for x in arr]  # Convert input elements to integers

x = int(input("Enter the element to search for: "))  # Take user input for the element to search

result = linear_search(arr, x)

if result != -1:
    print(f"Element {x} found at index {result}.")
else:
    print(f"Element {x} not found in the array.")
