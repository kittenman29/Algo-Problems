// Given the time in numerals we may convert it into words, as shown below:

// At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

// Function Description

// Complete the timeInWords function in the editor below. It should return a time string as described.

// timeInWords has the following parameter(s):

// h: an integer representing hour of the day
// m: an integer representing minutes after the hour
// Input Format

// The first line contains , the hours portion The second line contains , the minutes portion

// Constraints

// Output Format

// Print the time in words as described.

function timeInWords(h, m) {
  // create a cache with all the time:words
  let returnTime = "";
  let words = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half",
    31: "twenty nine",
    32: "twenty eight",
    33: "twenty seven",
    34: "twenty six",
    35: "twenty five",
    36: "twenty four",
    37: "twenty three",
    38: "twenty two",
    39: "twenty one",
    40: "twenty",
    41: "nineteen",
    42: "eighteen",
    43: "seventeen",
    44: "sixteen",
    45: "quarter",
    46: "fourteen",
    47: "thirteen",
    48: "twelve",
    49: "eleven",
    50: "ten",
    51: "nine",
    52: "eight",
    53: "seven",
    54: "six",
    55: "five",
    56: "four",
    57: "three",
    58: "two",
    59: "one"
  };
  if (m > 30 && m !== 45) {
    return words[m] + " minutes to " + words[h + 1];
  } else if (m === 45) {
    return words[m] + " to " + words[h + 1];
  } else if (m === 0) {
    return words[h] + " o' clock";
  } else if (m === 1) {
    return words[m] + " minute past " + words[h];
  } else if (m === 15) {
    return words[m] + " past " + words[h];
  } else if (m === 30) {
    return words[m] + " past " + words[h];
  } else if (2 <= m < 30 && m !== 15) {
    console.log("thirty");
    return words[m] + " minutes past " + words[h];
  }
}

timeInWords(5, 30);
