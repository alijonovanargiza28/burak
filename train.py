#TASK M
def test(array):
  arr2 = []
  for x in array:
    arr2.append({f"number:{x}, kv:{x*x}"})
  return arr2

arr=[1,2,3,4]
print(test(arr))

#Task L
# def reverseSentence(sentence):
#     return sentence[::-1]
# print(reverseSentence("Hello world"))

