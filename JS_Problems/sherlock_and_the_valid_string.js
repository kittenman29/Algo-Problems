// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// For example, if , it is a valid string because frequencies are . So is  because we can remove one  and have  of each character in the remaining string. If  however, the string is not valid as we can only remove  occurrence of . That would leave character frequencies of .

// Function Description

// Complete the isValid function in the editor below. It should return either the string YES or the string NO.

// isValid has the following parameter(s):

// s: a string
// Input Format

// A single string .

// Constraints

// Each character
// Output Format

// Print YES if string  is valid, otherwise, print NO.

// Sample Input 0

// aabbcd
// Sample Output 0

// NO
// Explanation 0

// Given , we would need to remove two characters, both c and d  aabb or a and b  abcd, to make it valid. We are limited to removing only one character, so  is invalid.

// Sample Input 1

// aabbccddeefghi
// Sample Output 1

// NO
// Explanation 1

// Frequency counts for the letters are as follows:

// {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

// There are two ways to make the valid string:

// Remove  characters with a frequency of : .
// Remove  characters of frequency : .
// Neither of these is an option.

// Sample Input 2

// abcdefghhgfedecba
// Sample Output 2

// YES
// Explanation 2

// All characters occur twice except for  which occurs  times. We can delete one instance of  to have a valid string.\

function isValid(s) {
  // split the string
  let arr = s.split("");
  // init a cache
  let cache = {};
  // iterate over the array and put them in cache
  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      cache[arr[i]]++;
    } else {
      cache[arr[i]] = 1;
    }
  }
  let secArr = [];
  // iterate over the cache and push it into an array
  for (let value in cache) {
    secArr.push(cache[value]);
  }
  // pop off the last element
  secArr.sort((a, b) => a - b);
  //if the first element in the array is greater than one more than the freq
  // of everything else
  let removed = 0;
  console.log(secArr);
  if (
    (secArr[1] - secArr[0] > 1 && secArr[0] === 1) ||
    secArr[1] - secArr[0] === 1
  ) {
    secArr.shift();
    removed++;
  }
  if (secArr[1] - secArr[0] >= 1) {
    return "NO";
  }
  // if the last element in the array is greater than one more than the freq
  // of everything else
  if (secArr[secArr.length - 1] - secArr[secArr.length - 2] === 1) {
    secArr.pop();
    removed++;
  } else if (secArr[secArr.length - 1] - secArr[secArr.length - 2] > 1) {
    return "NO";
  }
  if (secArr[secArr.length - 1] - secArr[secArr.length - 2] >= 1) {
    return "NO";
  }
  if (removed > 1) {
    return "NO";
  }
  let initValue = secArr[0];
  // iterate over the array
  for (let i = 1; i < secArr.length; i++) {
    // if every element in the array is the same, return "YES"
    // else return "NO"
    if (secArr[i] === initValue) {
      continue;
    } else {
      return "NO";
    }
  }
  return "YES";
}
