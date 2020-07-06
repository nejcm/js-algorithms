Given an integer `n`, find the _minimal_ `k` such that

- `k = m!` (where `m! = 1 * 2 * ... * m`) for some integer `m`;
- `k >= n`.

In other words, find the smallest factorial which is not less than `n`.

Example

For `n = 17`, the output should be  
`leastFactorial(n) = 24`.

`17 < 24 = 4! = 1 * 2 * 3 * 4`, while `3! = 1 * 2 * 3 = 6 < 17`).

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] integer n**

  A positive integer.

  _Guaranteed constraints:_  
  `1 ≤ n ≤ 120`.

- **\[output\] integer**

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
