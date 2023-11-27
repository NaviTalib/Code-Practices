# # Identify and print prime numbers between 1 and 50
# print("Prime numbers between 1 and 50:")
# for num in range(2, 51):
#     is_prime = True
#     for i in range(2, int(num ** 0.5) + 1):
#         if num % i == 0:
#             is_prime = False
#             break
#     if is_prime:
#         print(num, end=' ')
# print()  # Print a newline for better readability

# # Calculate and print the sum of even numbers between 1 and 200
# even_sum = 0
# print("Sum of even numbers between 1 and 200:")
# for num in range(2, 201):
#     if num % 2 == 0:
#         even_sum += num

# print(even_sum)
# Get the range for prime numbers from the user
prime_start = int(input("Enter the start limit for prime numbers: "))
prime_end = int(input("Enter the end limit for prime numbers: "))

# Identify and print prime numbers in the specified range
print(f"Prime numbers between {prime_start} and {prime_end}:")
for num in range(prime_start, prime_end + 1):
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num, end=' ')
print()  # Print a newline for better readability

# Get the range for even numbers from the user
even_start = int(input("Enter the start limit for even numbers: "))
even_end = int(input("Enter the end limit for even numbers: "))

# Calculate and print the sum of even numbers in the specified range
even_sum = 0
print(f"Sum of even numbers between {even_start} and {even_end}:")
for num in range(even_start, even_end):
    if num % 2 == 0:
        even_sum += num

print(even_sum)
