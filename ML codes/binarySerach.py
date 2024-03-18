def binary_search(arr, x):
    """
    Perform binary search to find the index of element x in sorted array arr.
    
    Parameters:
    arr (list): Sorted list of elements to search through.
    x: Element to search for.
    
    Returns:
    int: Index of the element if found, -1 otherwise.
    """
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Take user input for the list
arr_input = input("Enter sorted elements of the list separated by space: ")
arr = [int(num) for num in arr_input.split()]

x = int(input("Enter the element to search for: "))  # Take user input for the element to search

result = binary_search(arr, x)

if result != -1:
    print(f"Element {x} found at index {result}.")
else:
    print(f"Element {x} not found in the array.")
