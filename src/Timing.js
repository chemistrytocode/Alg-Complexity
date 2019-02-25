function last(array) {
  return array[array.length - 1];
}

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

function reverse(array) {
  return array.reverse();
}

function sort(array) {
  array.sort();
}

function createArray(size) {
  array = [];
  for (var i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
  }
  return array;
}

function timeTesting(size, fn, repeat) {
  test = [];
  test = this.createArray(size);
  for (var i = 0; i < repeat; i++) {
    var t0 = performance.now();
    fn(test);
    var t1 = performance.now();
    return (t1 - t0).toFixed(3);
  }
}
