#TASK T
def mergeSortedArrays(arr1, arr2):
    return sorted(arr1 + arr2)

print(mergeSortedArrays([0, 3, 4], [4, 6]))
#TASK R
# def calculate(expression):
#     a, operator, b = expression.split()

#     if operator == "+":
#         return int(a) + int(b)
#     elif operator == "-":
#         return int(a) - int(b)
#     elif operator == "*":
#         return int(a) * int(b)
#     elif operator == "/":
#         return int(a) / int(b)

# print(calculate("1 + 3"))   


# TASK Q
# def hasProperty(obj, prop):
#     if prop in obj:
#         return True
#     return False

# print(hasProperty({"name": "BMW"}, "name"))
# print(hasProperty({"color":"PINK"}, "year"))

#TASK P
# def object_to_array(obj):
#     result = []
#     for key, value in obj.items():
#         result.append([key, value])
#     return result
    
# print(object_to_array({"a":10, "b":30, "c":40}))


#Task O
# def calculateSumOfNumbers(arr):
#     count = 0
#     for x in arr:
#         if type(x)==int or type(x)==float:
#             count += x 
#     return count

# print(calculateSumOfNumbers([10,50, "20", True , 5.5,-1]))
    

#TASK N
# def palindromCheck(word):
#     reversed_word = word[::-1]
#     return word == reversed_word

# print(palindromCheck("dad"))     
# print(palindromCheck("level"))   
    

#TASK M
# def test(array):
#   arr2 = []
#   for x in array:
#     arr2.append({f"number:{x}, kv:{x*x}"})
#   return arr2

# arr=[1,2,3,4]
# print(test(arr))

#Task L
# def reverseSentence(sentence):
#     return sentence[::-1]
# print(reverseSentence("Hello world"))

