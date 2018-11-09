class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value, null, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      this.head = node;
    }
  }

  dequeue() {
    if (!this.tail) {
      console.log('Empty queue');
      return null;
    }

    // One node list
    if (this.head === this.tail) {
      // set this.tail to null
      this.tail = null;
      // set this.head to null
      this.head = null;

      return this;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;

    return this;
  }
}

function peek(queue) {
  if (!queue.tail) {
    return null;
  }

  return queue.tail.value;
}

function display(queue) {
  let counter = queue.tail;
  const result = [];

  if (!queue.tail) {
    return null;
  }

  while (counter) {
    result.push(counter.value);
    counter = counter.prev;
  }

  return result;
}

function main() {
  const queue = new Queue();

  queue.enqueue('hello');
  queue.enqueue('goodbye');
  queue.dequeue();

  console.log(peek(queue));
  console.log(display(queue));
}

main();

module.exports = Queue;
