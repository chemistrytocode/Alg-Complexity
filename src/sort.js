//Sort
function sort(array) {
  return array.sort();
}

function booleanSort(array) {
    trues = []
    falses =[]
    array.forEach( num => {
      num === 0 ? trues.push(num) : falses.push(num)
    })
    return [...trues, ...falses ]
}

// function booleanSort2(array) {
//     array.forEach((num, index) => {
//       if(num === 0) { array.splice(index, 1); array.unshift(num) }
//     })
//     return array
// }

// // quicksort:
// function quickSort(arr) {
//   quicksort(arr);
//
//   function quicksort(arr, left = 0, right = arr.length - 1) {
//     var len = arr.length,
//       pivot,
//       partitionIndex;
//
//     if (left < right) {
//       pivot = right;
//       partitionIndex = partition(arr, pivot, left, right);
//
//       //sort left and right
//       quicksort(arr, left, partitionIndex - 1);
//       quicksort(arr, partitionIndex + 1, right);
//     }
//   }
// return arr;
// }

function defaultComparator(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else return 0;
}

function quickSort(array, comparator = defaultComparator) {
  recursiveSort(0, array.length - 1);
  return array;

  function recursiveSort(start, end) {
    const pivotValue = array[end];
    let splitIndex = start;
    if (end - start < 1) {
      return;
    }
    for (let i = start; i < end; i++) {
      const sort = comparator(array[i], pivotValue);
      if (sort === -1) {
        if (splitIndex !== i) {
          const temp = array[splitIndex];
          array[splitIndex] = array[i];
          array[i] = temp;
        }
        splitIndex++;
      }
    }
    array[end] = array[splitIndex];
    array[splitIndex] = pivotValue;

    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  }
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
