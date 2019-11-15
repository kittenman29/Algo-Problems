def array_of_arrays(x):
  # use timsort to sort the array
  x.sort()

  # getting the number of elements in each sub_array from a list comprehension
  ranges = [(len(x)//3) + (1 if i < len(x) % 3 else 0) for i in range(3)]
  print(ranges)

  new_arr = []

  for j in range(len(ranges)):
    # append the elements from 0 to ranges[j] to the new_arr
    new_arr.append(x[:ranges[j]])
    # splice off what you just appended
    x = x[ranges[j]:]
  
  return new_arr

print(array_of_arrays([2, 1, 3, 5, 7, 5, 9, 6, 8, 13, 12, 11, 10, 0, 15, 16, 14]))


def find_frequency(letter, sentence):
  # init a hash for constant time lookup
  hash = {}
  
  for i in sentence:
    # if the letter already exists in the hash, increase it
    if i in hash:
      hash[i] += 1
    # otherwise add it to hash with value of 1
    else:
      hash[i] = 1
  
  return hash[letter] if letter in hash else 0


print(find_frequency("a", "this is a test"))


def is_power_two(y):
  # this can be done with a classic binary search for O(log n) time complexity
  
  #  take care of the base cases
  if y == 0 or y == 1:
    return y
  
  # set the low number equal to 0
  low = 0
  # set the high number equal to our parameter
  high = y


  while low <= high:
    # cut it in half and define this as midpoint; this is what gives the algo
    # log n time
    mid = (high + low)//2

    # this will only ever hit the first time if you test 4
    if mid**2 == y:
      return True

    elif mid**2 < y:
      low = mid + 1

    else:
      high = mid - 1

  return False
    


print(is_power_two(81))

def is_power_two(y):
  found = False
  if y >= 1:
    if y % 2 == 0:
      if y // 2 == 1:
        found = True
      else:
        return is_power_two(y//2)
  
  return found


print(is_power_two(1))