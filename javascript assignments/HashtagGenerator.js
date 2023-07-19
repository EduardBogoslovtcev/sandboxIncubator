/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  if(str == '') return false;
  let result = '';

  str = str.trim().split(" ");
  str = str.filter((val) => val != '')
  for(let i = 0; i<str.length; i++){
    let val = '';
    str[i] = str[i].toLowerCase();
    val = str[i];
    val = val.replace(val[0], val[0].toUpperCase());
    result += val;
  }
  if(result.length<140 && result.length>0){
    result = "#" + result;
    return result;
  }
  else return false;
}