function peek(stack) {
  if (!stack.top) {
    return null;
  }

  console.log(stack.top.data);
}

function display(stack) {
  let counter = stack.top;

  if (!stack.top) {
    return null;
  }

  while (counter) {
    console.log(counter.data);
    counter = counter.next;
  }
}

module.exports = {
  peek,
  display
};
