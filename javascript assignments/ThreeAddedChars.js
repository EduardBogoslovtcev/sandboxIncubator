/*
Given two strings, the first being a random string and the second being the same as the first, but 
with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually 
shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added 
characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.

*/

function addedChar(s1, s2){
  let case1 = {};
  let case2 = {};
  for(let i = 0; i<s1.length; i++){
    if (case1.hasOwnProperty(s1[i]) == true) case1[s1[i]] ++;
    else case1[s1[i]] = 1;
  }
  for(let i = 0; i<s2.length; i++){
    if (case2.hasOwnProperty(s2[i]) == true) case2[s2[i]] ++;
    else case2[s2[i]] = 1;
  }
  for(let i = 0; i<s2.length; i++){
    if(case1.hasOwnProperty(s2[i]) == false){
      return s2[i];
    }
    else if(case2[s2[i]] - case1[s2[i]] == 3) return s2[i];
  }
}