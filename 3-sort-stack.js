const Stack = require("./Stack");
const { display, peek } = require("./helpers");

// for each number:
//   if main is empty OR num < peek(second) OR num < main:
//     push num to main
//   else:
//     if num < peek(second):
//       while num < peek(second):
//           main.push(second.pop)
//       second.push(num)
//     else:
//       while num > peek(main):
//         second.push(main.pop())
//       main.push(num)

// for each number in second:
//   main.push(second.pop())

// return main stack // [2, 3, 6, 7]
// 3, 6, 2, 7

function sort(arr) {
  const main = new Stack();
  const second = new Stack();

  for (const num of arr) {
    const mainTop = peek(main);
    const secondTop = peek(second);
    if (
      mainTop === null || secondTop
        ? num > secondTop && num < mainTop
        : num < mainTop
    ) {
      main.push(num);
    } else {
      if (num < secondTop) {
        while (peek(second) && num < peek(second)) {
          main.push(second.pop());
        }
        second.push(num);
      } else {
        while (peek(main) && num > peek(main)) {
          second.push(main.pop());
        }
        main.push(num);
      }
    }
  }

  while (peek(second) !== null) {
    main.push(second.pop());
  }

  return main;
}

function main() {
  display(sort([1, 2, 3, 4])); // expect [1, 2, 3, 4]
  display(sort([4, 1, 3, 2])); // expect [1, 2, 3, 4]
  display(sort([2, 1])); // expect [1, 2]
}

main();
7, 6, 5, 8;
7, 6, 5, 8;

/*
3, 6, 2, 7

for each number:
  if main is empty OR num < peek(second) OR num < main:
    push num to main
  else:
    if num < peek(second):  
      while num < peek(second):
          main.push(second.pop)
      second.push(num)
    else:
      while num > peek(main):
        second.push(main.pop())
      main.push(num)

for each number in second:
  main.push(second.pop())

return main stack // [2, 3, 6, 7]

main:
1. 3
2. 6
3. 6, 3
4. 7
5. 7, 6, 3, 2

second:
1. empty
2. 3
3. 2
4. 2, 3, 6
5. empty



2
2, 3
2, 3, 6

smallest -> largest
2, 3, 6, 7

largest -> smallest




3, 6, 2, 7
6, 7, 3, 2          // store 10

for all numbers in the array
  if num > top of main
  if num < top of main, push num
  else pop the top and consider putting this value in a second stack
    if top of second stack is less than 

if there is a second stack to hold smaller numbers
  if the next number is small than top of this second stack,
  we need this number to go back to the main stack



 */
