Given an integer `product`, find the _smallest_ **positive** (i.e. greater than
`0`) integer the product of whose digits is equal to `product`. If there is no
such integer, return `-1` instead.

**Example**

- For `product = 12`, the output should be  
  `digitsProduct(product) = 26`;
- For `product = 19`, the output should be  
  `digitsProduct(product) = -1`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] integer product**

  _Guaranteed constraints:_  
  `0 ≤ product ≤ 600`.

- **\[output\] integer**

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
