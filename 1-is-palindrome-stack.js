const Stack = require('./Stack');
const { display, peek } = require('./helpers');

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  const n = s.length;

  for (let i = 0, j = n - 1; i < n / 2; i++, j--) {
    stack.push(s[i]);
    if (peek(stack) === s[j]) stack.pop();
    else stack.push(s[j]);
  }

  return peek(stack) === null;
}

// (function main() {
//   console.log(is_palindrome("dad"));
//   console.log(is_palindrome("A man, a plan, a canal: Panama"));
//   console.log(is_palindrome("1001"));
//   console.log(is_palindrome("Tauhida"));
//   console.log(is_palindrome("t"));
//   console.log(is_palindrome(""));
// })();
