/* Write a function that takes in an array and moves all of the non-zero integers to the 
left side of the array and all of the zeroes to the right side of the array.  Return the
array.
*/

// const zeroesToTheRight = nums => {
//   let counter = 0;
//   // loop through the array and pull out each
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       // increment a counter
//       counter++;
//       // splice out that index
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   // push counter # of 0's into the array
//   let zeroes = new Array(counter).fill(0);
//   // push in the zeroes array
//   nums.push(...zeroes);
//   console.log(nums);
// };

// zeroesToTheRight([1, 9, 0, -2, 3, 4, 0, 3, 0]);

const zeroesToTheRight = nums => {
  let left = 0;
  let right = nums.length - 1;
  // loop through the array and pull out each
  while (left < right) {
    if (nums[left] === 0) {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        right--;
        left++;
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  console.log(nums);
};

zeroesToTheRight([1, 9, 0, -2, 3, 4, 0, 3, 0]);
