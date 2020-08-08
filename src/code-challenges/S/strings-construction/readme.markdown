Given two strings `a` and `b`, both consisting only of lowercase English letters, your
task is to calculate how many strings equal to `a` can be constructed using only letters
from the string `b`? Each letter can be used only once and in one string only.

Example

- For `a = "abc"` and `b = "abccba"`, the output should be
  `stringsConstruction(a, b) = 2`.

  We can construct `2` strings `a = "abc"` using only letters from the string `b`.

- For `a = "ab"` and `b = "abcbcb"`, the output should be `stringsConstruction(a, b) = 1`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string a**

  String to construct, containing only lowercase English letters.

  _Guaranteed constraints:_  
  `1 ≤ a.length ≤ 105`.

- **\[input\] string b**

  String containing needed letters, containing only lowercase English letters.

  _Guaranteed constraints:_  
  `1 ≤ b.length ≤ 105`.

- **\[output\] integer**

  - The number of strings `a` that can be constructed from the string `b`.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
