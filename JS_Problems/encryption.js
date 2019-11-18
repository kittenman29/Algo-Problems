/*
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let  be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

For example, the sentence , after removing spaces is  characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots
Ensure that 
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

You will be given a message to encode and print.
*/

function encryption(s) {
  let result = "";
  let length = s.length;

  let rows = Math.floor(Math.sqrt(length));
  let cols = Math.ceil(Math.sqrt(length));

  if (rows * cols < length) {
    rows++;
  }

  // if (rows % 2 != 0) {
  //   rows++
  // };

  // incrementing by by one to the end of the string
  for (let i = 0; i < cols; i++) {
    // incrementing by cols
    for (let j = i; j < length; j += cols) {
      result += s[j];
    }
    result += " ";
  }

  return result;
}
