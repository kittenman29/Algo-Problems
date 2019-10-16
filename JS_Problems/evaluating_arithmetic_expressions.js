/*
Write a function that receives an arithmetic expression as a string. Some examples of valid expressions are:

[+, 23, -8, -67]
[-, 89, 5, -9, 16]
[x, 23, 22, -1, 0]
[+, [-, 1, 4], [+, 98, 3, -56], [x, 1, 6, 15]]
Your function should evaluate the given expression and return the resulting value. +, -, and x are the only operations you need to consider.

For example, the first expression [+, 23, -8, -67] asks us to sum the values 23, -8, and -67. Our function would return an answer of -52.

The second expression [-, 89, 5, -9, 16] asks us to take the first operand, 89, and subtract from it 5, -9, and then 16 for a result of 77.

The third expression [x, 23, 22, -1] asks us to multiply 23, 22, and -1. Our function would return an answer of -506.

The last expression [+, [-, 1, 4], [+, 98, 3, -56], [x, 1, 6, 15]] asks us to sum the result of the nested expressions. Once all of the nested expressions are evaluated, it becomes [+, -3, 45, 90] for a final answer of 132.
*/




// First solution
// have a helper function that parses numbers 
function parseNumber(expr, i) {
    let str = "";
    let length = 0;
    // start looping in the expression at i 
    for (let j = i; j < expr.length; j++) {
      if (expr[j] === "-") {
        str += expr[j];
      } else if (expr[j].match(/[0-9]/i)) {
        str += expr[j];
      } else {
        length = j - i;
        break;
      }
      // until we hit a non-numeric character 
      // everything before is part of the number 
      // plus negative signs 
      // parse the numeric string into an actual number 
    }
  ​
    return [Number(str), length];
  }
  ​
  function evalArithmeticExpression(expr) {
    // just consider the simple cases
    // convert the expression string to an array 
    // how to perform the conversion? 
    // split at the commas  
  ​
    // how do we know when we have encountered a nested expression? 
    // while we're iterating through, if we hit another [
    // how do we deal with ]?
  ​
    const operator = expr[1];
    // use an array to store our operands 
    const operands = [];
    let pos = 4;
    let answer = 0;
  ​
    // for now, don't consider inputs with nested expressions 
    // loop through the string starting after the operator symbol 
    while (pos < expr.length) {
      const char = expr[pos];
      // if we find a positive or negative, that tells us the operation 
      // if there's a plus, add every index in the array 
      // if there's an x, multiply every index in the array 
      // save element at index 1, then grab all numbers after that and subtract
      // from the saved element 
  ​
      // if expr[pos] == '['
      if (char === '[') {
        // recurse 
        // then we know we have a sub-expression 
        // how do we handle the subexpression? 
        // we'll re-use the same logic we came up with for non-nested expressions 
        // could we do this recursively? 
        // base case? when there are no more nested expressions in the current expression 
        // otherwise, we'll determine what to do based on the current char we're on 
  ​
        // how do we do the recursion? 
        // are we calling this function again? 
        // are we calling a separate recursive helper? 
        // call this function again, passing it the substring from this index going forward 
        // if we send the [ into the recursive 
        const [a, p] = evalArithmeticExpression(expr.substring(pos));
        operands.push(a);
        // update our position to skip past the entirety of the sub-expression 
        // +1 to skip past the ] 
        pos += (p + 1);
      }
  ​
      // if expr[pos] == ']'
      else if (char === ']') {
        // we can evaluate our expression 
        answer = eval(operator, operands);
        break;
      }
  ​
      // if expr[pos] is a number or "-"
      else if (char === "-" || char.match(/[0-9]/i)) {
        // add the number to the operands array 
        const [operand, length] = parseNumber(expr, pos);
        operands.push(operand);
        // update our position by the length + 2
        pos += length;
      }
  ​
      else {
        // skip over any other char
        pos++;
      }
      // alternate option for subtraction: iterate through the operands, flipping
      // the sign of each one and then performing addition over all of the flipped
      // operands; and then flip the sign of the result 
    }
  ​
    return [answer, pos];
  ​
    // create a obj of all the operations 
    // use some recursion 
    // use the array reduce method for performing the operations 
  }
  ​
  function eval(operator, operands) {
    // use an array reduce 
    if (operator === "+") {
      return operands.reduce((acc, curr) => acc + curr);
    } else if (operator === "-") {
      return operands.reduce((acc, curr) => acc - curr);
    } else {
      return operands.reduce((acc, curr) => acc * curr);
    }
  }
  ​
  const expr = "[+, [-, 1, 4], 10, [+, 98, [-, 8, 15], -56], [x, 1, 6, 15]]";
  // const expr = "[-, 1, [+, 2, 2]]";
  console.log(evalArithmeticExpression(expr));





  // Second Solution

  function matheval(s) {
	// These give us some functions to call for a given
	// arithmetic operator
​
	function add(a, b) { return a + b; }
	function sub(a, b) { return a - b; }
	function mul(a, b) { return a * b; }
	function div(a, b) { return a / b; }
​
	const fmap = { '+': add, '-': sub, 'x': mul, '/': div };
​
	// For a given tokenized expression, compute the value
	function matheval_inner(a, start_index) {
		let accum = null; // Accumulate the result here
		let f = null;
		let i;
​
		// Go through the expression
		for (i = start_index; i < a.length; i++) {
			const elem = a[i];
​
			if (elem == '[') {
				// Recursively evaluate subexpression
				// Get the next index back to skip i over
				// the subexpression
				[val, i] = matheval_inner(a, i + 1);
			} else if (elem in fmap) {
				// This is an operator
				// Get the function for it
				f = fmap[elem];
				continue;
			} else if (elem == ']') {
				// End of subexpression
				break; // break out of loop and return result
			} else {
				// This is just a regular number
				val = parseInt(a[i]);
			}
​
			// Build up the result in the accumulator
			if (accum === null) {
				// If this is the first thing encountered, just store it
				accum = val;
			} else {
				// Otherwise, apply the current operation to it
				accum = f(accum, val);
			}
		}
​
		return [accum, i];
​
	}
​
	// Convert the expression string into a series of tokens
	//
	// "[+, 5, [-, 10, 4]]"
	//
	// becomes
	//
	// [ "[", "+", 5, "[", "-", 10, 4, "]", "]" ]
	function tokenize(s) {
		const result = [];
​
		for (elem of s.split(',').map(e => e.trim())) {
			if (elem[0] == '[') {
				// This is the beginning of an expression
				result.push('[');
				result.push(elem[1]); // operator
			} else {
				// Just a value
				result.push(parseInt(elem));
​
				// Hunt down all closing brackets
				for (let j = 0; j < elem.length; j++) {
					if (elem[j] == ']') {
						result.push(']');
					}
				}
			}
		}
​
		return result;
	}
​
	const [result, _] = matheval_inner(tokenize(s), 0)
​
	return result;
}
​
// MAIN
​
// Run some tests
const tests = {
	"[+, 23, -8, -67]": -52,
	"[-, 89, 5, -9, 16]": 77,
	"[x, 23, 22, -1]": -506,
	"[+, [-, 1, 4], [+, 98, 3, -56], [x, 1, 6, 15]]": 132,
	"[+, [-, 1, 4], 5]": 2,
	"[+, [-, 1, [x, 2, 3]], 20]": 15,
	"[x, [-, [+, 30, 20], [x, 2, 3]], 20]": 880,
};
​
for ([expression, value] of Object.entries(tests)) {
	const v = matheval(expression);
	const result = v === value? "PASS": "FAIL";
​
	console.log(`${result}: ${expression} = ${v}`);
}

