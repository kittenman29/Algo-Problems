# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.




class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        maxSum = nums[0]
        tempSum = nums[0]
        
        
        for i in range(1, len(nums)):
            if tempSum < nums[i] and tempSum <= 0:
                tempSum = nums[i]
            else:
                tempSum = tempSum + nums[i]
            
            if tempSum > maxSum:
                maxSum = tempSum
            
        return maxSum
        
        
#         [-2, 1, -3, 4, -1, 2, 1, -5, 4]
#                     ^
        
#         is tempSum > maxSum
        
        
#         if it is, we'll replace maxSum with tempSum
        
#         if it isn't, we'll replace temSum with current index value