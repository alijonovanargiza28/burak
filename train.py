#TASK Y
def test(a, b):
    c = []

    for x in a:
        if x in b:
            c.append(x)
    return c
print(test([2,3,4],[4,3,5]))
#TASK X
# def test(obj, key):
#     count = 0

#     for x in obj:
#         if x == key:
#             count += 1

#         if isinstance(obj[x], dict):
#             count += test(obj[x], key)

#     return count
# print(test({
#     "model": "hello",
#     "m": 5,
#     "c": {
#         "model": "b","b":{
#             "model":7
#         }
#     }
# }, "model"))

#TASK W
# def chunkArray(arr, size):
#     result = []

#     for i in range(0, len(arr), size):
#         result.append(arr[i:i + size])

#     return result


# print(chunkArray([1, 2, 3, 4, 6], 2))


#TASK V
# text = "banana"
# result = {}

# for harf in text:
#     if harf in result:
#         result[harf] = result[harf] + 1
#     else:
#         result[harf] = 1
        
# print(result)

# def mergeSortedArrays(arr1, arr2):
#     return sorted(arr1 + arr2)

# print(mergeSortedArrays([0, 3, 4], [4, 6]))
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

