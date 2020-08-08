Ticket numbers usually consist of an even number of digits. A ticket number is considered
_lucky_ if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number `n`, determine if it's _lucky_ or not.

Example

- For `n = 1230`, the output should be  
  `isLucky(n) = true`;
- For `n = 239017`, the output should be  
  `isLucky(n) = false`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] integer n**

  A ticket number represented as a positive integer with an even number of digits.

  _Guaranteed constraints:_  
  `10 ≤ n < 106`.

- **\[output\] boolean**

  - `true` if `n` is a lucky ticket number, `false` otherwise.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
