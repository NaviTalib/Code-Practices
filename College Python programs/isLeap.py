Y = int(input("Enter a year:"))
if(Y%4==0 and Y%100!=0)or(Y%400==0):
    print(Y,"is Leap year")
else:
    print(Y,"is not Leap year")    