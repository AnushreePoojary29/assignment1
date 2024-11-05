const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generateInvoice = (transaction) => {
    const doc = new PDFDocument();
    const invoiceDir = path.join(__dirname, '../invoices/generated');

    // Ensure the directory exists
    if (!fs.existsSync(invoiceDir)) {
        fs.mkdirSync(invoiceDir, { recursive: true });
    }

    const invoicePath = path.join(invoiceDir, `invoice_${transaction.userId}.pdf`);
    doc.pipe(fs.createWriteStream(invoicePath));
    doc.text(`Invoice for User ID: ${transaction.userId}`);
    doc.text(`Utility Type: ${transaction.utilityType}`);
    doc.text(`Amount: $${transaction.amount}`);
    doc.end();

    return invoicePath; // Ensure you return the path
};

module.exports = { generateInvoice }; // Export the function
