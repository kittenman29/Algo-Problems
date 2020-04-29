# Given an array of strings, return another array containing all of its longest strings.

# Example

# For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
# allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] array.string inputArray

# A non-empty array.

# Guaranteed constraints:
# 1 ≤ inputArray.length ≤ 10,
# 1 ≤ inputArray[i].length ≤ 10.

# [output] array.string

# Array of the longest strings, stored in the same order as in the inputArray.




def allLongestStrings(Arr):
    max = 0
    ret_arr = []
    for str in Arr:
      if len(str) == max:
        ret_arr.append(str)
      elif len(str) > max:
        ret_arr = [str]
        max = len(str)
      else:
        pass
    return ret_arr