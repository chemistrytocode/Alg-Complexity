# Algorithmic Complexity In JavaScript

> This repo is designed to only measure the __processing time taken__ of some well known functions.

**Big O notation** is used in to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
![big_o_notation_graph](https://user-images.githubusercontent.com/44780483/53408265-014a7a00-39b6-11e9-91bd-1b60fb0b2e55.jpeg)


> This repo is designed to only measure the __processing time taken__ of some well known functions.      

## Initial 4 Benchmark Functions:
### The last() Function

A constant function as the processing time is unaffected by the size of the input.
This makes sense as .last() works by looking at the last element of an array and should be the same whether the array length is 10 or 1,000,000.

### The reversing() Function

A linear function as the processing time is effected by the size of the input.
The effect however is negligible as the process is overall extremely fast with the number of inputs only adding approximately 0.0004ms for every 5000 elements in an array.

### The shuffle() Function

A linear function as the processing time is effected by the size of the input.
The .shuffle() function is effected more by it's number of inputs and is adding appoximately 0.05ms of proccessing time for every 5000 elements in an array.

### The sort() Function

A linear function as the processing time is effected by the size of the input.
The processing time shows clear correlation with the number of inputs adding approximately 0.01ms of processing time per 5000 elements in an array.

## All Functions on One Graph

When comparing all the functions on the same graph we really see the true scale of how efficient they are, which you don't quite get as much when looking at them on their own. Here I can see the sorting() function clearly comes out as the worst performing. If I was to approximately rate the functions based on my array sizes against the Big O Complexity Chart they would be as follows:
* last() - **O(1)**
* reversing() - **O(log n)**
* sorting() - **O(n log n)**
* shuffle() - **O(log n) / O(n)**
