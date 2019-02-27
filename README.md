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

The __.shuffle()__ function is slower more effected by it's number of inputs adding appoximately 0.05ms of proccessing time for every 5000 elements in an array.

The __.popShuffle()__ function is faster taking about half the resources of .shuffle() to achieve the same goal.

### The sort(), quickSort() and bubbleSort() Functions
![sort vs quicksort vs bubblesort](https://user-images.githubusercontent.com/43698605/53485741-ebed5280-3a7e-11e9-8146-50aaa082e1dc.png)
Sorting is a clear linear function which clearly shows that processing time is effected by the size of the input.

The default __.sort()__ function is by far the quickest of the three functions however it also isn't sorting effectively. An array of [1,3,11,4,5] will be sorted [1,11,3,4,5] and therefore isn't a clear representation of the sorting function we require.

The __quickSort()__ function is a very clever and efficient solution to sorting. It works by assigning a pivot point and exploiting the speed of constant algorithms to look at each element and place it to the left or right of this pivot point.

The __bubbleSort()__ function is ridiculously slow and is a good example of a bad O(n^2) algorithm. The code works by doing a complete backwards iteration for every step of a forward iteration which is naturally very inefficient.

### The duplicate(), duplicatesWithQuickSort() and duplicatesWithStandardSort() Functions
![duplicate vs duplicateswithquicksort vs duplicateswithstandardsort](https://user-images.githubusercontent.com/43698605/53486679-4d162580-3a81-11e9-9472-0e4f4d1b8d67.png)
Duplicating is a clear linear function which clear shows that proccessing time is effected by the size of the input.

The __duplicates()__ function works using two loops, for each forward step in the first loop the second completes an entire iteration checking for matching. Using two loops is relatively inefficient and this is shown in the results.

The __duplicatesWithQuick()__ function works by first sorting the array using the quickSort function and then doing a single iteration over the new array. At each step of the iteration it checks for a match forward and behind and if found adds the match a new array. Whilst this duplicates function is incredibly efficient the sorting adds a cost to the process which ultimately makes it slightly slower than duplicates().

The __duplicatesWithStandardSort()__ function is by far the quickest and works upon the same principles as before. As previously mentioned sort() doesn't sort effectively ([1,11,3,4] etc...) but if the goal is to get similar elements next to each other then that defect is irrelevant. The efficient sort function combined with the efficient single iteration duplicate check leads to a very fast algorithm.

## All Functions on One Graph

TBC
