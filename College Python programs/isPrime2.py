# Get user input for a number
user_input = input("Enter a number: ")

# Check if the input is a valid integer
if user_input.isdigit():
    # Convert the input to an integer
    user_input = int(user_input)

    # Check if the number is prime
    if user_input < 2:
        print(f"{user_input} is not a prime number.")
    else:
        is_prime = True
        for i in range(2, int(user_input**0.5) + 1):
            if user_input % i == 0:
                is_prime = False
                break

        if is_prime:
            print(f"{user_input} is a prime number.")
        else:
            print(f"{user_input} is not a prime number.")
else:
    print("Please enter a valid integer.")
