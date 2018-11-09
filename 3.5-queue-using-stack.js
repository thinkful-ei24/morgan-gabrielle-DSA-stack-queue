const { peek } = require('./helpers');
const Stack = require('./Stack');

class Queue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(value) {
    // while we have stuff in dequeue stack
    while (peek(this.dequeueStack)) {
      // we want to push to the enqueue stack what we pop from the dequeue stack
      this.enqueueStack.push(this.dequeueStack.pop());
    }

    // push the value to the enqueue stack
    this.enqueueStack.push(value);

    return this;
  }

  dequeue() {
    // while we have nothing in the dequeue stack
    while (peek(this.enqueueStack)) {
      // we want to push to the dequeue stack what we pop from the enqueue stack
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    // and then pop the dequeue stack
    return this.dequeueStack.pop();
  }
}

// function peek() {}

function display() {}

/* [1,2,3,4,5]

FIFO - queue
=> 1,2,3,4,5

LIFO - stack
enqueue:
1,2,3,4,5 <=

dequeue:
=> 1,2,3,4,5

ENQUEUE
[] => 4
[] => dequeueStack
we take the value (4) => enqueueStack

DEQUEUE

*/
