user_number = int(input("Enter a number: "))
divisors_sum = 1  # Start with 1 as every number is divisible by 1
for i in range(2, int(user_number**0.5) + 1):
    if user_number % i == 0:
        divisors_sum += i
        if i != user_number // i:  # Avoid counting the same divisor twice for perfect squares
            divisors_sum += user_number // i

if divisors_sum == user_number:
    print(f"{user_number} is a Perfect Number.")
else:
    print(f"{user_number} is not a Perfect Number.")