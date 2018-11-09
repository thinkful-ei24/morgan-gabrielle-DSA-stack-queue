const Stack = require('./Stack');
const { peek } = require('./helpers');

function matchParenths(string) {
  /*
  str = (())

  1. loop through string, if we encounter opening parentheses push ( to stack
  2. if we encounter ) remove ( from stack
  3. check if we have any ( in the stack, if so uneven number of parenths
  */

  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    // if we have an open we push the position to the top of the stack
    if (string[i] === '(') {
      stack.push(i);
    }

    // encounter a closing, pop the top of the stack
    if (string[i] === ')') {
      // peak to see the top is empty, if it is we have too many closing
      if (peek(stack) === null) {
        return console.log(`Extra closing parenthesis at position ${i}`);
      }

      stack.pop();
    }
  }

  // if we peek and there is nothing in the stack we have an equal number of parenths
  if (peek(stack) === null) {
    console.log('Equal parentheses');
  } else {
    console.log(`Extra opening parentheses at position ${peek(stack)}`);
  }
}

matchParenths('(())'); // true
matchParenths('(()))'); // too many closings
matchParenths('((())'); // too many openings
// console.log(matchParenths('((( ))')); // error

/*
push position to stack for every open and pop for every close

when we peek and have nothing we good


3o/2c => too many openings parenths in stack
( 0
( 1 <- pop
( 2 <- pop
)
)

2o/3c => pop returns null means too many closing
    <- pop
( 0 <- pop
( 1 <- pop
)
)
)

2o/2c => peak returns null
( 0 <- pop
( 1 <- pop
)
)
*/
