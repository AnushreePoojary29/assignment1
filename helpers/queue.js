const fs = require('fs');
const transactionsLog = './data/transactions_log.json';
let queue = [];
let urgentQueue = [];

const addPayment = (userId, utilityType, amount) => {
  queue.push({ userId, utilityType, amount });
};

const addUrgentPayment = (userId, utilityType, amount) => {
  urgentQueue.push({ userId, utilityType, amount });
};

const processPayments = () => {
  while (urgentQueue.length > 0 || queue.length > 0) {
    let payment = urgentQueue.length ? urgentQueue.shift() : queue.shift();
    logTransaction(payment);
  }
};

const logTransaction = async (transaction) => {
    let data;
    try {
      data = JSON.parse(await fs.promises.readFile(transactionsLog, 'utf-8'));
    } catch (err) {
      data = [];
    }
    data.push(transaction);
    await fs.promises.writeFile(transactionsLog, JSON.stringify(data, null, 2));
  };
  

module.exports = { addPayment, addUrgentPayment, processPayments };
