s1 = input("Enter the first String: ")
s2 = input("Enter the second String: ")

set1 = set(s1)
set2 = set(s2)

common_chars = set1.intersection(set2)
print("Common characters between",s1,"and",s2,":")
for char in common_chars:
    print(char)