/*
You will be given an array that contains two strings. Your job is to create a function that will take 
those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/

function transposeTwoStrings (array) {
  let max = Math.max(array[0].length, array[1].length);
  let output = '';

  for(let i = 0; i<max; i++){
    if (array[0][i] !== undefined) output += array[0][i];
    else output += ' ';
    output += ' ';
    if (array[1][i] !== undefined) output += array[1][i];
    else output += ' ';
    if(i!==max-1) output += '\n';
  }
  return output;
}