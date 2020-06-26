Determine if the given number is a power of some non-negative integer.

Example

- For `n = 125`, the output should be  
  `isPower(n) = true`;
- For `n = 72`, the output should be  
  `isPower(n) = false`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] integer n**

  A positive integer.

  _Guaranteed constraints:_  
  `1 ≤ n ≤ 400`.

- **\[output\] boolean**

  - `true` if `n` can be represented in the form `ab` (`a` to the power of `b`)
    where `a` and `b` are some non-negative integers and `b ≥ 2`, false
    otherwise.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
