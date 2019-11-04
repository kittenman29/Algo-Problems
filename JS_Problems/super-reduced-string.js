/*
  Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

  Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print Empty String

**** Function Description ****

  Complete the superReducedString function in the editor below. It should return the super reduced string or Empty String if the final string is empty.

  superReducedString has the following parameter(s):

    str: a string to reduce


 */

function superReducedString(str) {
  let newArr = str.split("");
  let cache = {};
  let returnArr = [];

  for (let i = 0; i < newArr.length; i++) {
    // if there is already the letter in the cache, increment.  Otherwise put it in cache
    cache[newArr[i]] ? cache[newArr[i]]++ : (cache[newArr[i]] = 1);
  }

  for (let value in cache) {
    // if the cache frequency of the letter is odd
    if (cache[value] % 2 !== 0) {
      // push that candy into a new array
      returnArr.push(value);
    }
  }
  // join the return array and return it
  return returnArr.join("");
}

console.log(superReducedString("aaabccddd")); // should return 'abd'
console.log(superReducedString("aa")); // should return 'Empty String'
console.log(superReducedString("baab")); // should return 'Empty String'
console.log(superReducedString("halloween")); // shouild return 'haown'
console.log(superReducedString("mississippi")); //should return 'm'
console.log(superReducedString("Mmississippi")); //should return 'Mm'
