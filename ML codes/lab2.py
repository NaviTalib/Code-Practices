import numpy as np

myList = [[1,2,3],[4,5,6]]

arr = np.array(myList)
# print(arr.ndim)
print(arr)

#matrix with zeores
arr2 = np.zeros((3,5))

print(arr2)

#matrix with ones
arr3 = np.ones((3,5))

print(arr3)

# identitiy matrix
arr4 = np.eye(5)
arr5 = np.eye(3,4)
print(arr4)

print(arr5)

#for customize diagonal
arr6 = np.diag([1,2,3,4])
# returns all diagonals
arr_diag = np.diag(arr6)
print(arr_diag)

#return random values between  a specific range np.random.randint(start,stop,num_of_values)
np.random.seed(121) #give a fixed valued in every execution
arr7 = np.random.randint(1,10,5)
print(arr7)


#return random value b/w 0 and 1
arr8 = np.random.rand(5)
#return random value b/w 0 and 1 (2D matrix)

# np.random.seed(1)
arr9 = np.random.rand(2,3)

print(arr9)

#slicing of array

a = [0,1,2,3,4,5,6,7,8,9]
b = np.array(a)
print(b)
print(b[2:9:2])
print(b[:-6])
print(b[-6:])

#creating an array from a specific range np.arange(start, stop , step)
c = np.arange(0,9)
print(c)

#shape and reshape of matrix
np.random.seed(1)
d = np.random.randint(1,15,12)
print(d)
print(d.shape)
# d = d.reshape(-1,2)
d = d.reshape(2,2,3)
print(d)
print(d.ndim)


#


