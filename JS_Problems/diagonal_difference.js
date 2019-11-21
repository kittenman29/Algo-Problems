/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
*/

function diagonalDifference(arr) {
  // init a total for left-to-right(ltr) Total sum
  let ltrTotal = 0;
  // init a total for right-to-left(rtl) Total sum
  let rtlTotal = 0;

  let ltrRow = 0;
  let ltrCol = 0;

  let rtlRow = 0;
  let rtlCol = arr.length - 1;

  // as long as the right to left column is >= 0 and ltr col is <= arr.length-1
  while (rtlCol >= 0 && ltrCol <= arr.length - 1) {
    ltrTotal += arr[ltrRow][ltrCol];
    rtlTotal += arr[rtlRow][rtlCol];
    ltrRow++;
    ltrCol++;
    rtlRow++;
    rtlCol--;
  }
  return Math.abs(ltrTotal - rtlTotal);
}
