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
    if (
      sorted_arr[i] === sorted_arr[i - 1] ||
      sorted_arr[i] === sorted_arr[i + 1]
    ) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

function duplicatesWithQuickSort(array) {
  var sorted_arr = quickSort(array);
  var results = [];
  for (var i = 0; i < sorted_arr.length; i++) {
    if (
      sorted_arr[i] === sorted_arr[i - 1] ||
      sorted_arr[i] === sorted_arr[i + 1]
    ) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}
