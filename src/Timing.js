
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

function averager(array) {
  total = 0
  array.forEach(number => {total += number})
  return(total/ array.length);
}

function timeTesting(size, fn, repeat) {
  test = [];
  test = this.createArray(size);
  averagingArray= []
  for (var i = 0; i < repeat; i++) {
    var t0 = performance.now();
    fn(test);
    var t1 = performance.now();
    averagingArray.push(t1-t0)
  }
  var average = averager(averagingArray)
  var rounded = Math.floor((average)*100000)/100000
  return (rounded.toFixed(5))
}
