user_number = int(input("Enter a number: "))
digit_sum = 0

# Calculate the sum of digits
temp_number = user_number
while temp_number > 0:
    digit_sum += temp_number % 10
    temp_number //= 10

print(f"Sum of digits in {user_number}: {digit_sum}")
