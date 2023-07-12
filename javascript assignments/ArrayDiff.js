/*
DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  for(let i = 0; i<a.length; i++){
    let j = 0;
    while (j < b.length) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
      } else {
        ++j;
      }
    }
  }
  for(let i = 0; i<a.length; i++){
    let j = 0;
    while (j < b.length) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
      } else {
        ++j;
      }
    }
  }
  return a;
}