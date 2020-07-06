Check whether the given string is a [subsequence](keyword://subsequence) of the
[plaintext alphabet](keyword://plaintext-alphabet).

Example

- For `s = "effg"`, the output should be  
  `alphabetSubsequence(s) = false`;
- For `s = "cdce"`, the output should be  
  `alphabetSubsequence(s) = false`;
- For `s = "ace"`, the output should be  
  `alphabetSubsequence(s) = true`;
- For `s = "bxz"`, the output should be  
  `alphabetSubsequence(s) = true`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string s**

  _Guaranteed constraints:_  
  `2 ≤ s.length ≤ 15`.

- **\[output\] boolean**

  - `true` if the given string is a _subsequence_ of the _alphabet_, `false`
    otherwise.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
