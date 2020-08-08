You are implementing your own HTML editor. To make it more comfortable for developers you
would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should
propose.

If you are not familiar with HTML, consult with
[this note](keyword://html-rules-for-tags).

Example

- For `startTag = "<button type='button' disabled>"`, the output should be  
  `htmlEndTagByStartTag(startTag) = "</button>"`;
- For `startTag = "<i>"`, the output should be  
  `htmlEndTagByStartTag(startTag) = "</i>"`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string startTag**

  _Guaranteed constraints:_  
  `3 ≤ startTag.length ≤ 75`.

- **\[output\] string**

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
