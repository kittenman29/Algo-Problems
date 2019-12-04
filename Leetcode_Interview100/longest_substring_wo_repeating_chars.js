// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  // edge case of an empty input string
  if (s === "") {
    return 0;
  }
  // init a left counter
  let left = 0;
  // init a second counter to the right of the first
  let sec = 1;
  // init a cache
  let cache = {};
  // init a counter
  let counter = 1;
  // init a max
  let max = 1;
  // split the string into an array
  let arr = s.split("");
  // loop over the array with a for loop
  while (sec < arr.length) {
    cache[arr[left]] = true;

    if (cache[arr[sec]]) {
      counter = 1;
      cache = {};
      left++;
      sec = left + 1;
      cache[arr[left]] = true;
    } else {
      counter++;
      cache[arr[sec]] = true;
      sec++;
      if (counter > max) {
        max = counter;
      }
    }
  }
  return max;
};
