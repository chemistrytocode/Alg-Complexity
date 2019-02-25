describe("CreateArray", function() {
  it("Generate a random array", function() {
    spyOn(Math, "random").and.returnValue(0.01);
    expect(createArray(5)).toEqual([2, 2, 2, 2, 2]);
  });
});

describe("last", function() {
  it("should return last element of given array", function() {
    var arr = [1, 2, 3, 4, 5];
    expect(last(arr)).toEqual(5);
  });
});

describe("shuffle", function() {
  it("should mix up the elements in an array", function() {
    var arr = [1, 2, 3, 4, 5];
    spyOn(Math, "random").and.returnValue(0.01);
    expect(shuffle(arr)).toEqual([2, 3, 4, 5, 1]);
  });
});

describe("Reverse", function() {
  it("Reverse an array", function() {
    var arr = [1, 2, 3, 4, 5];
    expect(reverse(arr)).toEqual([5, 4, 3, 2, 1]);
  });
});
