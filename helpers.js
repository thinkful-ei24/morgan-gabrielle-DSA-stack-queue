function peek(stack) {
  if (!stack.top) {
    return null;
  }

  return stack.top.data;
}

function display(stack) {
  let counter = stack.top;

  if (!stack.top) {
    return null;
  }
  const result = [];
  while (counter) {
    result.push(counter.data);
    counter = counter.next;
  }
  console.log(result);
}

module.exports = {
  peek,
  display
};
