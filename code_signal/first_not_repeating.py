# Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

# Example

# For s = "abacabad", the output should be
# firstNotRepeatingCharacter(s) = 'c'.

# There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

# For s = "abacabaabacaba", the output should be
# firstNotRepeatingCharacter(s) = '_'.

# There are no characters in this string that do not repeat.

# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] string s

# A string that contains only lowercase English letters.

# Guaranteed constraints:
# 1 ≤ s.length ≤ 105.

# [output] char

# The first non-repeating character in s, or '_' if there are no characters that do not repeat.



def firstNotRepeatingCharacter(s):
    dix = dict()
    for i in range(0, len(s)):
      if s[i] in dix:
        dix[s[i]] += 1
      else:
        dix[s[i]] = 1
    
    for x, y in dix.items():
      if y < 2:
        return x
    
    return '_'
