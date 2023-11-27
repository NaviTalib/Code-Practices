# Get user input for a number
while True:
    user_input = input("Enter a number: ")

    # Check if the input is a valid positive integer
    if user_input.isdigit():
        number_to_check = int(user_input)

        # Check if the entered number is prime
        if number_to_check < 2:
            print(f"{number_to_check} is not a prime number.")
        else:
            is_prime = True
            for i in range(2, int(number_to_check**0.5) + 1):
                if number_to_check % i == 0:
                    is_prime = False
                    break

            if is_prime:
                print(f"{number_to_check} is a prime number.")
            else:
                print(f"{number_to_check} is not a prime number.")

        break  # Exit the loop after processing the input
    else:
        print("Invalid input. Please enter a valid positive integer.")
