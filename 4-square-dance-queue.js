const Queue = require("./Queue");

/*
F, M, M, M, F, M, M, F

Waitlist F: 
Waitlist M: M3, M4

{
  sex: M || F,
  name: String
}

for each guest that enters:
  if female enters:
    add female to wait list
    if there is a male waiting:
      dequeue from both wait lists

  if male enters:
    add male to wait list
    if there is a female waiting:
      dequeue from both 

  return a count of how many dancers are remaining
*/

function lonelySquareDancers(dancers) {
  const maleWaitlist = new Queue();
  const femaleWaitlist = new Queue();

  for (const dancer of dancers) {
    switch (dancer.sex) {
      case "M":
        maleWaitlist.enqueue(dancer.name);
        if (peek(femaleWaitlist) !== null) {
          maleWaitlist.dequeue();
          femaleWaitlist.dequeue();
        }
        break;
      case "F":
        femaleWaitlist.enqueue(dancer.name);
        if (peek(maleWaitlist) !== null) {
          maleWaitlist.dequeue();
          femaleWaitlist.dequeue();
        }
        break;
    }
  }

  if (peek(maleWaitlist) !== null) {
    let count = 0;

    while (peek(maleWaitlist) !== null) {
      maleWaitlist.dequeue();
      count++;
    }
    return `There are ${count} male dancers waiting to dance`;
  } else {
    let count = 0;

    while (peek(femaleWaitlist) !== null) {
      femaleWaitlist.dequeue();
      count++;
    }
    return `There are ${count} female dancers waiting to dance`;
  }
}

function main() {
  const dancers = [
    {
      sex: "F",
      name: "Jane"
    },
    {
      sex: "M",
      name: "Frank"
    },
    {
      sex: "M",
      name: "John"
    },
    {
      sex: "M",
      name: "Sherlock"
    },
    {
      sex: "F",
      name: "Madonna"
    },
    {
      sex: "M",
      name: "David"
    },
    {
      sex: "M",
      name: "Christopher"
    },
    {
      sex: "F",
      name: "Beyonce"
    }
  ];

  console.log(lonelySquareDancers(dancers)); // There are 2 male dancers waiting to dance
}

main();

function peek(queue) {
  if (!queue.tail) {
    return null;
  }

  return queue.tail.value;
}
