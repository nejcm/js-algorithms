An email address such as `"John.Smith@example.com"` is made up of a local part
(`"John.Smith"`), an `"@"` symbol, then a domain part (`"example.com"`).

The domain name part of an email address may only consist of letters, digits, hyphens and
dots. The local part, however, also allows a lot of different special characters.
[Here](https://en.wikipedia.org/wiki/Email_address#Examples) you can look at several
examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

Example

- For `address = "prettyandsimple@example.com"`, the output should be  
  `findEmailDomain(address) = "example.com"`;
- For `address = "fully-qualified-domain@codesignal.com"`, the output should be  
  `findEmailDomain(address) = "codesignal.com"`.

Input/Output

- **\[execution time limit\] 4 seconds (js)**

- **\[input\] string address**

  _Guaranteed constraints:_  
  `10 ≤ address.length ≤ 50`.

- **\[output\] string**

**\[JavaScript (ES6)\] Syntax Tips**

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
