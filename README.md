# Algorithmic Complexity In JavaScript

> This repo is designed to only measure the __processing time taken__ of some well known functions.

**Big O notation** is used in to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
![big_o_notation_graph](https://user-images.githubusercontent.com/44780483/53408265-014a7a00-39b6-11e9-91bd-1b60fb0b2e55.jpeg)


## Benchmark Functions:
### The last() Function
![last](https://user-images.githubusercontent.com/43698605/53485550-610c5800-3a7e-11e9-835e-c3e5f0daafcc.png)

A constant function as the processing time is unaffected by the size of the input.
This makes sense as .last() works by looking at the last element of an array and should be the same whether the array length is 10 or 1,000,000.

### The reversing() Function
![reverse](https://user-images.githubusercontent.com/43698605/53485534-5782f000-3a7e-11e9-81cc-e3f10bfcc87a.png)

A linear function as the processing time is effected by the size of the input.
The effect however is negligible as the process is overall extremely fast with the number of inputs only adding approximately 0.0004ms for every 5000 elements in an array.

### The shuffle() & popShuffle() Functions
![shuffle vs popshuffle](https://user-images.githubusercontent.com/43698605/53485568-6e294700-3a7e-11e9-96df-c05a1ed0de39.png)
Shuffling is linear function as the processing time is effected by the size of the input.
The .shuffle() function is slower more effected by it's number of inputs adding appoximately 0.05ms of proccessing time for every 5000 elements in an array.
The .popShuffle() function is faster taking about half the resources of .shuffle() to achieve the same goal.

### The sort(), quickSort() and bubbleSort() Functions
![sort vs quicksort vs bubblesort](https://user-images.githubusercontent.com/43698605/53485741-ebed5280-3a7e-11e9-8146-50aaa082e1dc.png)
The default .sort() function is by far the quickest of the three functions however it also isn't sorting effectively. An array of [1,3,11,4,5] will be sorted [1,11,3,4,5] and therefore isn't a clear representation of the sorting function we require.

The quickSort() function is a very clever and efficient solution to sorting. It works by assigning a pivot point and exploiting the speed of constant algorithms to look at each element and place it to the left or right of this pivot point.


The bubbleSort() function is ridiculously slow and is a good example of a bad O(n^2) algorithm. The code works by doing a complete backwards iteration for every step of a forward iteration which is naturally very inefficient.


## All Functions on One Graph

When comparing all the functions on the same graph we really see the true scale of how efficient they are, which you don't quite get as much when looking at them on their own. Here I can see the sorting() function clearly comes out as the worst performing. If I was to approximately rate the functions based on my array sizes against the Big O Complexity Chart they would be as follows:
* last() - **O(1)**
* reversing() - **O(log n)**
* sorting() - **O(n log n)**
* shuffle() - **O(log n) / O(n)**
