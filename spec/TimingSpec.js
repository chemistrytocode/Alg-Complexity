describe("#createArray", function() {
  it("Generate a random array", function() {
    spyOn(Math, "random").and.returnValue(0.01);
    expect(createArray(5)).toEqual([2, 2, 2, 2, 2]);
  });
  it("Generate a boolean array", function() {
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

describe("Shuffle functions", function() {

  describe("#shuffle", function() {
    it("should mix up the elements in an array", function() {
      var arr = [1, 2, 3, 4, 5];
      spyOn(Math, "random").and.returnValue(0.01);
      expect(shuffle(arr)).toEqual([2, 3, 4, 5, 1]);
    });
  });

  describe("#popShuffle", function() {
    it("should mix up the elements in an array", function() {
      var arr = [1, 2, 3, 4, 5];
      spyOn(Math, "random").and.returnValue(0.3);
      expect(popShuffle(arr)).toEqual([2, 3, 1, 4, 5]);
    });
  });
});

describe('Types of reverse', function() {
  describe("#reverse", function() {
    it("Reverse an array", function() {
      var arr = [1, 2, 3, 4, 5];
      expect(reverse(arr)).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe("#newReverse", function() {
    it("Reverse an array", function() {
      var arr = [1, 2, 3, 4, 5];
      expect(newReverse(arr)).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe("#reverseByInvert", function() {
    it("Reverse an array", function() {
      var arr = [1, 2, 3, 4, 5];
      expect(reverseByInvert(arr)).toEqual([5, 4, 3, 2, 1]);
    });
  });
});

describe("Types of sort", function() {
  describe("#sort", function() {
    it("Sort an array", function() {
      var arr = [5, 4, 3, 2, 1];
      expect(sort(arr)).toEqual([1, 2, 3, 4, 5]);
    });
    it("normal sort cannot handle double digit numbers", function() {
      var arr = [1, 7, 12, 20, 4, 2];
      expect(sort(arr)).not.toEqual([1, 2, 4, 7, 12, 20]);
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
    it("Quick sort handles random strings", function() {
      var arr = [1, 7, "String", 5, 9, 6, "Howdy", 4];
      expect(quickSort(arr)).toEqual([1, 4, 5, 6, 7, 9, "Howdy", "String"]);
    });
    it("Quick sort handles double digit numbers", function() {
      var arr = [1, 7, 12, 20, 4, 2];
      expect(quickSort(arr)).toEqual([1, 2, 4, 7, 12, 20]);
    });
  });

  describe("0/1 sorting", function() {

    it("0/1 sort an array", function() {
      var arr = [0,1,1,0,0,1];
      expect(booleanSort(arr)).toEqual([0,0,0,1,1,1]);
    });
    // it("0/1 sort an array", function() {
    //   var arr = [0,1,1,0,0,1];
    //   expect(booleanSort2(arr)).toEqual([0,0,0,1,1,1]);
    // });
    // it("0/1 sort an array", function() {
    //   var arr = [1, 0, 0, 1, 1, 1, 0, 0,1,1,0,0,1, 0];
    //   expect(booleanSort2(arr)).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
    // });
  })
});


describe('Types of duplicate', function() {

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


  describe("#duplicatesWithQuickSort", function() {
    it("Duplicates from sorted array", function() {
      var arr1 = [4, 5, 4, 3, 2]; // 4 Duplicate
      var arr2 = [5, 5, 2, 1, 5]; // 4 Trips
      var arr3 = [1, 2, 3, 4, 5]; // No Duplicate
      var arr4 = [4, 4,"Hello", "Hello", 1]; // 2 Duplicates
      expect(duplicatesWithQuickSort(arr1)).toEqual([4, 4]);
      expect(duplicatesWithQuickSort(arr2)).toEqual([5, 5, 5]);
      expect(duplicatesWithQuickSort(arr3)).toEqual([]);
     expect(duplicatesWithQuickSort(arr4)).toEqual([4, 4, "Hello", "Hello"]);
    });
  });

});

describe('Types of duplicate', function() {
  it('finds item that appears most frequently', function() {
    var arr1 = ["hello", "fish", "hello", "tower", "fish", "fish"];
    expect(freqWord(arr1)).toEqual("fish");
  })
});
describe('Types of duplicate', function() {
  it('finds item that appears most frequently', function() {
    var arr1 = ["hello", "fish", "hello", "tower", "fish", "fish"];
    expect(mostFreqWord(arr1)).toEqual("fish");
  })
});
