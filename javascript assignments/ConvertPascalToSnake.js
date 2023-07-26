/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case 
notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a
 string.
*/
function toUnderscore(string) {
  return string.toString().replace(/[A-Z]/g,function(element, index){
  element = element.toLowerCase();
  return index == 0 ? element :'_'+ element
  });
}