Given array of integers, remove each `kth` element from it.

Example

For `inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` and `k = 3`, the output should be  
`extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] array.integer inputArray**

  _Guaranteed constraints:_  
  `5 ≤ inputArray.length ≤ 15`,  
  `-20 ≤ inputArray[i] ≤ 20`.

- **\[input\] integer k**

  _Guaranteed constraints:_  
  `1 ≤ k ≤ 10`.

- **\[output\] array.integer**

  - `inputArray` without elements `k - 1`, `2k - 1`, `3k - 1` etc.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
