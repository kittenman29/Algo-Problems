// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  // init a counter
  let counter = 0;
  // init a pointer to move along array
  let p = 1;
  // bigness pointer
  let b = 0;
  // name the first element in array start
  let max = 0;
  let maxi = 0;
  // loop through with while loop
  while (b <= heights.length - 1) {
    max = heights[b];
    if (heights[p] > heights[b]) {
      max = heights[p];
      maxi = p;
      p++;
    } else {
      p++;
    }
    if ((p = heights.length - 1 && max > heights[heights.length - 1])) {
      heights.splice(maxi, 1).unshift(max);
      counter++;
      b++;
      p = b + 1;
      max = 0;
      maxi = 0;
    }
  }

  // return counter
  return counter;
};
