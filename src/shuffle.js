function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function popShuffle(array) {
  var newArray = []
  var counter = array.length

  while (counter > 0) {
    let index = Math.floor(Math.random()* (array.length));
    newArray.push(array[index])
    array.splice(index, 1)
    counter--
  }
  return newArray;
}
