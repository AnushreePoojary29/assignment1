let historyStack = [];

const addTransaction = (transaction) => {
  historyStack.push(transaction);
};

const undoLastTransaction = () => {
  if (historyStack.length > 0) {
    return historyStack.pop();
  } else {
    console.log('No transactions to undo');
  }
};

module.exports = { addTransaction, undoLastTransaction };
