//Sort
function sort(array) {
  return array.sort();
}

// quicksort:
function quickSort(arr) {
  quicksort(arr);

  function quicksort(arr, left = 0, right = arr.length - 1) {
    var len = arr.length,
      pivot,
      partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);

      //sort left and right
      quicksort(arr, left, partitionIndex - 1);
      quicksort(arr, partitionIndex + 1, right);
    }
  }

  function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
      partitionIndex = left;

    for (var i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
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
