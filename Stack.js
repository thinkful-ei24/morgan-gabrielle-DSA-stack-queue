const { peek, display } = require('./helpers');

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new Node(data, null);
      return this;
    }

    const node = new Node(data, this.top);
    this.top = node;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const node = this.top;
    this.top = node.next;

    return node.data;
  }
}

function main() {
  const starTrek = new Stack();

  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // starTrek.pop();

  // peek(starTrek);
  // console.log('====');
  // display(starTrek);
  starTrek.pop();
}

main();

module.exports = Stack;
