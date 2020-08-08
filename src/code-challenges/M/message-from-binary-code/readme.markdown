You are taking part in an Escape Room challenge designed specifically for programmers. In
your efforts to find a clue, you've found a binary code written on the wall behind a vase,
and realized that it must be an encrypted message. After some thought, your first guess is
that each consecutive `8` bits of the code stand for the character with the corresponding
[extended ASCII code](http://www.ascii-code.com/).

Assuming that your hunch is correct, decode the message.

Example

For `code = "010010000110010101101100011011000110111100100001"`, the output should be  
`messageFromBinaryCode(code) = "Hello!"`.

The first `8` characters of the code are `01001000`, which is `72` in the binary numeral
system. `72` stands for `H` in the _ASCII-table_, so the first letter is `H`.  
Other letters can be obtained in the same manner.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string code**

  A string, the encrypted message consisting of characters `'0'` and `'1'`.

  _Guaranteed constraints:_  
  `0 < code.length < 800`.

- **\[output\] string**

  - The decrypted message.

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
