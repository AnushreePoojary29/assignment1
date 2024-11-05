// const generateInvoice = require('../helpers/invoice');
// const express = require('express');
// const router = express.Router();
// const { addPayment, addUrgentPayment, processPayments, undoLastTransaction } = require('../helpers/queue');

// // Route to add a regular payment
// router.post('/pay-bill', (req, res) => {
//     const { userId, utilityType, amount } = req.body;
//     addPayment(userId, utilityType, amount); // Add payment to the queue

//     // Generate invoice
//     const transaction = { userId, utilityType, amount }; // Create transaction object
//     const invoicePath = generateInvoice(transaction); // Generate the invoice

//     // Respond with the invoice path
//     res.send(`Payment added to queue. Invoice generated at ${invoicePath}`);
// });


// // Route to process all payments
// router.get('/process-bills', (req, res) => {
//   processPayments();
//   res.send('All payments processed.');
// });

// // Route to undo last transaction
// router.get('/undo-transaction', (req, res) => {
//   undoLastTransaction();
//   res.send('Last transaction undone.');
// });

// module.exports = router;


const { generateInvoice } = require('../helpers/invoice'); // Ensure correct import
const express = require('express');
const router = express.Router();
const { addPayment, addUrgentPayment, processPayments, undoLastTransaction } = require('../helpers/queue');

// Route to add a regular payment
router.post('/pay-bill', (req, res) => {
    const { userId, utilityType, amount } = req.body;
    addPayment(userId, utilityType, amount); // Add payment to the queue

    // Generate invoice
    const transaction = { userId, utilityType, amount }; // Create transaction object
    const invoicePath = generateInvoice(transaction); // Generate the invoice

    // Respond with the invoice path
    res.send(`Payment added to queue. Invoice generated at ${invoicePath}`);
});

// Route to add an urgent payment
router.post('/urgent-bill', (req, res) => {
    const { userId, utilityType, amount } = req.body;
    addUrgentPayment(userId, utilityType, amount);
    res.send('Urgent payment added to priority queue.');
});

// Route to process all payments
router.get('/process-bills', (req, res) => {
    processPayments();
    res.send('All payments processed.');
});

// Route to undo last transaction
router.get('/undo-transaction', (req, res) => {
    undoLastTransaction();
    res.send('Last transaction undone.');
});

module.exports = router;

