# Algorithmic Complexity In JavaScript

> This repo is designed to only measure the __processing time taken__ of some well known functions.

**Big O notation** is used in to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
![big_o_notation_graph](https://user-images.githubusercontent.com/44780483/53408265-014a7a00-39b6-11e9-91bd-1b60fb0b2e55.jpeg)

Ranked from Best to Worst:

__O(1)__ are constants, they are functions which work at a speed regardless of input size. __BEST__

__O(log n)__ are logarithmic operations, they work by only look at fractions of the input and so still scale with input but at a very slow. __BEST__

__O(n)__ are linear operations, the time it takes to completely directly correlates to the size of the input. __GOOD__

__O(n log n)__ are combination of the logarithmic and linear operations, they consist of an outer linear iteration loop that contains inner logarithmic loop. __OK, SOMETIMES NECESSARY__

__O(n^2)__ are operations that look at each input for each input, iterating over an array whilst currently in a loop that's iterating over an array. __BAD__

__O(2^n)__ are recursive, they solve a problem of size N by recursively solving two smaller problems of size N-1. __REALLY BAD__

__O(n!)__ are the worst, an example would be list all permutation of an array. __WORST__


## Benchmark Functions:
### The last() Function
![last](https://user-images.githubusercontent.com/43698605/53485550-610c5800-3a7e-11e9-835e-c3e5f0daafcc.png)

**O(1)**
A constant function as the processing time is unaffected by the size of the input.
This makes sense as .last() works by looking at the last element of an array and should be the same whether the array length is 10 or 1,000,000.

### The reversing() Function
![reverse](https://user-images.githubusercontent.com/43698605/53485534-5782f000-3a7e-11e9-81cc-e3f10bfcc87a.png)

**O(n)**
Reverse has as many actions as items in the array: it has to move each one individually?

~~A logarithmic function as the processing time is affected by the size of the input but the correlation is not directly linear.
The effect of input size has on the performance is negligible which indicates the algorithm isn't doing much iteration.~~

### The shuffle() & popShuffle() Functions
![shuffle vs popshuffle](https://user-images.githubusercontent.com/43698605/53485568-6e294700-3a7e-11e9-96df-c05a1ed0de39.png)

~~A logarithmic function as the processing time is affected by the size of the input but the correlation is not directly linear.~~

####.shuffle()
**O(n)**
It's linear: loops through each item and swaps with a random other.
NB slower - more affected by its number of inputs adding approximately 0.05ms of proccessing time for every 5000 elements in an array.

####.popShuffle()
**O(n)**
Also linear as it still checks each value but this time splices and pushes to new array instead of swapping.

### The sort(), quickSort() and bubbleSort() Functions
![sort methods](https://user-images.githubusercontent.com/43698605/53497219-9e331300-3a9b-11e9-8eef-af63eb6e3b9e.png)
Sorting shows clear correlation between processing time and input size.

####default .sort()
**O(n)**
Linear?? Unclear what it's actually doing at even at 1mill input, no curve visible?
Quickest of the three functions but not sorting effectively: [1,3,11,4,5] becomes [1,11,3,4,5].
~~The result is a logarithmic graph but looks like a constant when compared to the other two results.~~

####quickSort()
**n(log)**
Binary search: Assigns a pivot point then sorts all elements to higher/lower. Reruns itself in halves.

####bubbleSort()
**O(n^2)**
Quadratic: complete backwards iteration for every step of a forward iteration so very slow.

### The duplicate(), duplicatesWithQuickSort() and duplicatesWithStandardSort() Functions
![duplicates](https://user-images.githubusercontent.com/43698605/53496996-1a792680-3a9b-11e9-8e18-7683a3cfa093.png)

####duplicates()
**O n^2**
Double loop so gets more inefficient the bigger the test size.
~~two loops, for each forward step in the first loop the second completes an entire iteration checking for matching. Using two loops is relatively inefficient and the result is a graph which shows a linear correlation between input size and time.~~

####duplicatesWithQuick()
**O(n)**
Quicksorts the array first (efficient) so only 1 loop needed - just compares to the values before and after.

 ~~function works by first sorting the array using the quickSort function and then doing a single iteration over the new array. At each step of the iteration it checks for a match forward and behind and if found adds the match a new array. Whilst this duplicates function is incredibly efficient the sorting adds a cost to the process which ultimately makes it slightly slower than duplicates(). I would say this graph shows a logarithmic function as it doesn't quite show the same linear line as the other function.~~

####duplicatesWithStandardSort()
**O(n)**
Sorts the array first( fast but limited usage) so only 1 loop needed - just compares to the values before and after.
 ~~function is by far the quickest and works upon the same principles as before. As previously mentioned sort() doesn't sort effectively ([1,11,3,4] etc...) but if the goal is to get similar elements next to each other then that defect is irrelevant. The efficient sort function combined with the efficient single iteration duplicate check leads to a very fast algorithm. The graph shows a clear logarithmic function which scales with input size but at a very slow rate.~~

 ###Most frequent word functions
 _(image later)_

 **O(n)**
 Both linear (most freq word just a faster process): Creates hash to stroe number of times each word appears so iterates through once (then returns highest ranking from hash).

## All Functions on One Graph

TBC
