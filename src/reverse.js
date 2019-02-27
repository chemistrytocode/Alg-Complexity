function reverse(array) {
  return array.reverse();
}

function newReverse(array) {
  const newArray = [];
  const len = array.length;
  for (i = 0; i < len; i++) {
      item = array.pop()
      newArray.push(item)
  }
  return newArray
}


function reverseByInvert(array) {
  let newArray = [];
  for(let item of array){
    newArray = [item, ...newArray];
  }
  return newArray;
}
