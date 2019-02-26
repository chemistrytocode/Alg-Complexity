describe("#createArray", function() {
  it("Generate a random array", function() {
    spyOn(Math, "random").and.returnValue(0.01);
    expect(createArray(5)).toEqual([2, 2, 2, 2, 2]);
  });
});

describe("#last", function() {
  it("should return last element of given array", function() {
    var arr = [1, 2, 3, 4, 5];
    expect(last(arr)).toEqual(5);
  });
});

describe("#shuffle", function() {
  it("should mix up the elements in an array", function() {
    var arr = [1, 2, 3, 4, 5];
    spyOn(Math, "random").and.returnValue(0.01);
    expect(shuffle(arr)).toEqual([2, 3, 4, 5, 1]);
  });
});

describe("#reverse", function() {
  it("Reverse an array", function() {
    var arr = [1, 2, 3, 4, 5];
    expect(reverse(arr)).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("#sort", function() {
  it("Sort an array", function() {
    var arr = [5, 4, 3, 2, 1];
    expect(sort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("#bubblesort", function() {
  it("Bubble sort an array", function() {
    var arr = [5, 4, 3, 2, 1];
    expect(bubblesort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("#quicksort", function() {
  it("Quick sort an array", function() {
    var arr = [5, 4, 3, 2, 1];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
  it("Quick sort a long array", function() {
    var arr = [5, 4, 3, 2, 1, 4, 1, 9, 4, 2, 1, 1, 1,5, 4, 3, 2, 1, 4, 1, 9, 4, 2, 1, 1, 1];
    expect(quickSort(arr)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 9, 9]);
  });
});

describe("#duplicates", function() {
  it("Duplicates from sorted array", function() {
    var arr1 = [4, 5, 4, 3, 2]; // 4 Duplicate
    var arr2 = [2, 4, 4, 1, 4]; // 4 Trips
    var arr3 = [1, 2, 3, 4, 5]; // No Duplicate
    var arr4 = ["Hello", 4, "Hello", 4, 1]; // 2 Duplicates
    var arr5 = [5, 2, 3, 4, 5]; // No Duplicate
    expect(duplicates(arr1)).toEqual([4, 4]);
    expect(duplicates(arr2)).toEqual([4, 4, 4]);
    expect(duplicates(arr3)).toEqual([]);
    expect(duplicates(arr4)).toEqual(["Hello", 4, "Hello", 4]);
    expect(duplicates(arr5)).toEqual([5,5]);
  });
});

describe("#duplicatesWithStandardSort", function() {
  it("Duplicates from sorted array", function() {
    var arr1 = [4, 5, 4, 3, 2]; // 4 Duplicate
    var arr2 = [5, 5, 2, 1, 5]; // 4 Trips
    var arr3 = [1, 2, 3, 4, 5]; // No Duplicate
    var arr4 = ["Hello", 4, "Hello", 4, 1]; // 2 Duplicates
    expect(duplicatesWithStandardSort(arr1)).toEqual([4, 4]);
    expect(duplicatesWithStandardSort(arr2)).toEqual([5, 5, 5]);
    expect(duplicatesWithStandardSort(arr3)).toEqual([]);
    expect(duplicatesWithStandardSort(arr4)).toEqual([4, 4, "Hello", "Hello"]);
  });
});


//
// describe("#duplicatesWithQuickSort", function() {
//   it("Duplicates from sorted array", function() {
//     var arr1 = [4, 5, 4, 3, 2]; // 4 Duplicate
//     var arr2 = [4, 4, 4, 1, 2]; // 4 Trips
//     var arr3 = [1, 2, 3, 4, 5]; // No Duplicate
//     var arr4 = ["Hello", 4, "Hello", 4, 1]; // 2 Duplicates
//     expect(duplicatesWithStandardSort(arr1)).toEqual([4,4]);
//     expect(duplicatesWithStandardSort(arr2)).toEqual([4, 4]);
//     expect(duplicatesWithStandardSort(arr3)).toEqual([]);
//     expect(duplicatesWithStandardSort(arr4)).toEqual([4, "Hello"]);
//   });
// });
