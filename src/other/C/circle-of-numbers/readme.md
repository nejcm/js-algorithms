Consider integer numbers from `0` to `n - 1` written down along the circle in
such a way that the distance between any two neighboring numbers is equal (note
that `0` and `n - 1` are neighboring, too).

Given `n` and `firstNumber`, find the number which is written in the radially
opposite position to `firstNumber`.

Example

For `n = 10` and `firstNumber = 2`, the output should be  
`circleOfNumbers(n, firstNumber) = 7`.

![](https://codesignal.s3.amazonaws.com/tasks/circleOfNumbers/img/example.png?_tm=1582003395936)

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] integer n**

  A positive **even** integer.

  _Guaranteed constraints:_  
  `4 ≤ n ≤ 20`.

- **\[input\] integer firstNumber**

  _Guaranteed constraints:_  
  `0 ≤ firstNumber ≤ n - 1`.

- **\[output\] integer**

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
