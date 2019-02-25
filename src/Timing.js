// Actions on array:
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

// measuring time:
function timeTesting(size, fn, repeat) {
  var randomArray = createArray(size);
  var intervalsArray = [];
  measureIntervals();
  var average = findAverage();
  return roundToFive(average);

  function measureIntervals() {
    for (var i = 0; i < repeat; i++) {
      var t0 = performance.now();
      fn(randomArray);
      var t1 = performance.now();
      intervalsArray.push(t1 - t0);
    }
  }

  function findAverage() {
    total = 0;
    intervalsArray.forEach(number => {
      total += number;
    });
    return total / intervalsArray.length;
  }

  function roundToFive(average) {
    return (Math.floor(average * 100000) / 100000).toFixed(5);
  }
}

// Set up:
function createArray(size) {
  array = [];
  for (var i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
  }
  return array;
}
