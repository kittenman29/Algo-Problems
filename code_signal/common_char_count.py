# Given two strings, find the number of common characters between them.

# Example

# For s1 = "aabcc" and s2 = "adcaa", the output should be
# commonCharacterCount(s1, s2) = 3.

# Strings have 3 common characters - 2 "a"s and 1 "c".

# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] string s1

# A string consisting of lowercase English letters.

# Guaranteed constraints:
# 1 ≤ s1.length < 15.

# [input] string s2

# A string consisting of lowercase English letters.

# Guaranteed constraints:
# 1 ≤ s2.length < 15.

# [output] integer



def commonCharacterCount(s1, s2):
    # init a dict
    dix = {}
    # init a ret_arr
    ret_arr = []
    # loop through s1, adding frequency and chars to dict
    for char in s1:
        if char in dix:
            dix[char] += 1
        else:
            dix[char] = 1

    # loop through s2
    for char in s2:
        # if dict value at s2[char] >= 1:
        if char not in dix:
          pass
        elif dix[char] > 1:
            # reduce the dict value by 1
            dix[char] -= 1
            # add s2[char] to ret_arr
            ret_arr.append(char)
        # else if dict value at s2[char] == 1
        else:
            # delete the dict key and value
            dix.pop(char)
            # add s2[char] to the ret_arr
            ret_arr.append(char)
        
    
    return len(ret_arr)

    # one liner:
    # return sum(min(s1.count(x), s2.count(x)) for x in set(s1))