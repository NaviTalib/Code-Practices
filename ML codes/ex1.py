from functools import reduce

def grading(m):
    if m>=90:
        return "A"
    elif m>=80 and m<=89:
        return "B"
    elif m>=70 and m<=79:
        return "C" 
    elif m>=60 and m<=69:
        return "D"
    else:
        return "F"


def top(m1,m2):
    if m1>m2:
        return m1
    else:
        return m2

marksList = input("Enter the marks of students seprated by space: ").split()

marksList = [int(x) for x in marksList]
gradeList = list(map(grading, marksList))

greaterThan60 =  list(filter(lambda x:x >= 60,marksList))

greaterThan60 = list(map(grading, greaterThan60))

topper = reduce(top,marksList)
topper_grade = grading(topper)

print("\nMarks List of all students:  ", marksList)
print("\nGrade List of all students: ", gradeList)
print("\nStudents who got marks greater than or equal to 60 :",greaterThan60)
print("\nTopper Marks and grade : ", topper,topper_grade)
