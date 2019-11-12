/*
# Evaluating Circuit Expressions

## Problem Statement

A circuit expression consists of the following symbols:

 - `[]` denotes operation precedence
 - `&` denotes the logical AND operation
 - `|` denotes the logical OR operation
 - `!` denotes the logical NOT operation
 - `1` denotes logical true 
 - `0` denotes logical false 

Write a function that receives an array of strings, where each string
represents a circuit expression. Your function should evaluate the circuit
expression and return the answer, either `1` or `0`. 

For example, given the following input:

```
1
[|, [&, 1, [!, 0]], [!, [|, [|, 1, 0], [!, 1]]]]
```

Your function should return `1`. The evaluation of the expression occurs in the
following steps:

![order_of_operations](https://user-images.githubusercontent.com/4572868/68636647-0f183f00-04f4-11ea-8464-60686aa3ebe5.png)

So the overall expression evaluates to `1`.
*/

function example(expr) {
  // split up the input string into an array of individual characters
  chars = expr.split(", ");

  // manually get rid of the brackets at the ends of the input
  // use a switch/if statement where each branch handles an operator
  let operator = chars[0][1];
  let operands = [];
  for (let i = 0; i < chars.length; i++) {
    if (i === 0) {
      continue;
    } else if (i === chars.length - 1) {
      operands.push(chars[i][0]);
    } else {
      operands.push(chars[i]);
    }
  }
  switch (operator) {
    case "&":
      for (let i = 0; i < operands.length - 1; i++) {
        if (operands[i] !== operands[i + 1]) {
          return 0;
        } else {
          return 1;
        }
      }
    case "|":
      for (let i = 0; i < operands.length; i++) {
        let count = 0;
        while (operands[i] === 0) {
          count;
        }
      }
    case "!":
      return !operands[0] ? 1 : 0;
  }

  // write another function to handle all of the other operator cases
}

example("[|, 1, 0]");
