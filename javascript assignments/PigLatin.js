/*
DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  
  let finalStr = '';
  let temp = str.split(' ');
  let signs = ",.;:?!\'\"";
  for (let i = 0; i<temp.length; i++){
    if(signs.includes(temp[i])){
      finalStr += temp[i] + ' ';
    }else{
      let biba = temp[i];
      biba = biba.concat(biba[0]+"ay ");
      biba = biba.replace(biba[0], '');
      finalStr += biba;
    }
  }
  return finalStr.trim();
}