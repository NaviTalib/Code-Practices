# Given list of tuples representing student information
student_info = [
    ("RAM", 17, "A"),
    ("SHYAM", 20, "B"),
    ("MOHAN", 21, "C"),
    ("NITIN", 24, "A"),
    ("SOHAN", 18, "B")
]

# i. Form a new list containing the names of all students aged 20 or older.
students_20_or_older = [name for name, age, grade in student_info if age >= 20]

# ii. Calculate the average age of all students in the list.
average_age = sum(age for name, age, grade in student_info) / len(student_info)

# iii. Identify the highest grade in the list.
highest_grade = max(grade for name, age, grade in student_info)

# iv. Print the results
print("Names of students aged 20 or older:", students_20_or_older)
print("Average age of all students:", average_age)
print("Highest grade in the list:", highest_grade)
