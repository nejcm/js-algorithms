Given the positions of a white `bishop` and a black `pawn` on the standard chess
board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to
diagonal movement. Check out the example below to see how it can move:  
![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1581997207350)

Example

- For `bishop = "a1"` and `pawn = "c3"`, the output should be  
  `bishopAndPawn(bishop, pawn) = true`.

  ![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/ex1.jpg?_tm=1581997207686)

- For `bishop = "h1"` and `pawn = "h3"`, the output should be  
  `bishopAndPawn(bishop, pawn) = false`.

  ![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/ex2.jpg?_tm=1581997207976)

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string bishop**

  Coordinates of the white bishop in the
  [chess notation](keyword://chess-notation).

  _Guaranteed constraints:_  
  `bishop.length = 2`,  
  `'a' ≤ bishop[0] ≤ 'h'`,  
  `1 ≤ bishop[1] ≤ 8`.

- **\[input\] string pawn**

  Coordinates of the black pawn in the same notation.

  _Guaranteed constraints:_  
  `pawn.length = 2`,  
  `'a' ≤ pawn[0] ≤ 'h'`,  
  `1 ≤ pawn[1] ≤ 8`.

- **\[output\] boolean**

  - `true` if the bishop can capture the pawn, `false` otherwise.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
