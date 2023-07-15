function moveZeros(arr) {
  let zeros = [];
  let other = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0) zeros.push(0);
    else other.push(arr[i]);
  }
  return other.concat(zeros);
}