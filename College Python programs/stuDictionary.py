# Given dictionary
student_scores = {
    "RAVI": 86,
    "VIPIN": 93,
    "CHANDAR": 79,
    "KULDEEP": 89,
    "NAMAN": 96
}

# i. Discover and print the name of the student with the highest exam score.
highest_scorer = max(student_scores, key=student_scores.get)
print(f"The student with the highest exam score is: {highest_scorer}")

# ii. Compute and print the average exam score for all students.
average_score = sum(student_scores.values()) / len(student_scores)
print(f"The average exam score for all students is: {average_score:.2f}")

# iii. Develop a new dictionary, passing_students, that includes students scoring 75 or higher.
passing_students = {name: score for name, score in student_scores.items() if score >= 75}
print("Passing Students:")
print(passing_students)
