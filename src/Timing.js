//Last
function last(array) {
  return array[array.length - 1];
}
//Shuffoe
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

//Reverse
function reverse(array) {
  return array.reverse();
}

//Sort
function sort(array) {
  return array.sort();
}

//BubbleSort
function bubblesort(array) {
  var length = array.length;
  for (var i = length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

//Duplicates
function duplicates(array) {
  results = [];
  for (var i = 0; i <= array.length; i++) {
    for (var j = 0; j <= array.length; j++) {
      if (i != j && array[i] == array[j]) {
        results.push(array[j]);
        break;
      }
    }
  }
  return results;
}

function duplicatesWithStandardSort(array) {
  var sorted_arr = array.sort();
  var results = [];
  for (var i = 0; i < sorted_arr.length; i++) {
    if (sorted_arr[i] === sorted_arr[i-1] || sorted_arr[i] === sorted_arr[i+1]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
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
