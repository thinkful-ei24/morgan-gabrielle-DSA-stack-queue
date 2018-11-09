const Stack = require('./Stack');

function matchParenths(string) {
  /*
  str = (())

  1. loop through string, if we encounter opening parentheses push ( to stack
  2. if we encounter ) remove ( from stack
  3. check if we have any ( in the stack, if so uneven number of parenths
  */

  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {}
}

console.log(matchParenths('(( ))')); // true
console.log(matchParenths('((( ))')); // error

/*
(( ))
counter = 4

((( ))
counter = 5

push position to stack for every open and pop for every close

when we peak and encounter nothing we have an extra closing
*/
