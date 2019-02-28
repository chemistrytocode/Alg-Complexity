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

function jeddReverse(arr) {
  var j = arr.length - 1
  for (var i = 0; i < arr.length; i++) {
    if (i >= j) {
      break
    }
    var obj = arr[i]
    arr[i] = arr[j]
    arr[j] = obj
    j--
  }
  return arr
}


function reverseByInvert(array) {
  let newArray = [];
  array.forEach( item => {
    newArray = [item, ...newArray];
  })
  return newArray;
}
