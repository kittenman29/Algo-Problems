// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

var findDuplicate = function(nums) {
  // init a left counter
  let left = 0;
  // init a right counter
  let right = nums.length - 1;
  // loop through the array with a while loop left < nums.length-2
  while (left < nums.length - 1) {
    // if left = right
    if (nums[left] === nums[right]) {
      return nums[left];
    } else if (nums[left] !== nums[right] && left < right - 1) {
      // else if they aren't equal and left < right-1
      // decrease right
      // console.log(right);
      right--;
    } else if (nums[left] !== nums[right] && left === right - 1) {
      // else if they aren't equal and left = right - 1
      // increase left by one, reset right to right end
      left++;
      right = nums.length - 1;
    }
  }
};
