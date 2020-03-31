# Given a string, your task is to count how many palindromic substrings in this string.

# The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

# Example 1:

# Input: "abc"
# Output: 3
# Explanation: Three palindromic strings: "a", "b", "c".
 

# Example 2:

# Input: "aaa"
# Output: 6
# Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

# Note:

# The input string length won't exceed 1000.




class Solution:
    def countSubstrings(self, s: str) -> int:
        
        #akldsfjasdlkfjasdlfasldfkjalsdf
        #^^

        #init a counter
        counter = len(s)
        
        #make tempstr an array
        x = [char for char in s]
        tempstr = []
        
        #init left pointer at [0]
        lp = 0
        #init right pointer at left+1
        rp = lp + 1
        #init a tempstr
        #append left & right pointer value to tempstr
        tempstr.append(x[lp])
        tempstr.append(x[rp])
        #while left pointer < len(str-1)
        while lp < len(x) - 1:
            #if right pointer === left pointer
            if x[rp] == x[lp]:
                #substring(tempstr)
                substring(tempstr)
                #increment right pointer by 1
                rp + 1
            #elif right pointer != left pointer
            elif x[rp] != x[lp]:
                #increment right pointer by 1
                rp + 1
                #append right pointer value to tempstr
                tempstr.append(x[rp])
            #else right pointer === len(str)-1
            else:
                #left pointer increment by 1
                lp + 1
                #right pointer = left + 1
                rp = lp + 1
                #tempstr = values of left + right pointers     
                tempstr = x[lp] + x[rp]
        
        def substring(self, counter, tempstr):
            #if tempstr is 2 chars long
            if len(tempstr) <= 3:
                return counter + 1
            else:
                #again do two pointers
                #one at the start, one at the end
                lsubp = 1
                rsubp = len(tempstr) - 2
                #move them simultaneously
                while lsubp < rsubp:
                    #if they are next to each other 
                    if tempstr[lsubp] == tempstr[rsubp] and lsubp + 1 >= rsubp:
                        return counter + 1
                    # if they are equal but far apart
                    elif tempstr[lsubp] == tempstr[rsubp]:
                        lsubp + 1
                        rsubp - 1
                    else:
                        break
        
        
        #return counter
        return counter