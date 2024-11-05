// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const apiRoutes = require('./routes/api'); // Import your API routes

// // Initialize the Express application
// const app = express();

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Define the base route for API
// app.use('/api', apiRoutes);

// // Define a simple home route (optional)
// app.get('/', (req, res) => {
//   res.send('Welcome to the Utility Bill Payment System API!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000; // Set port to 3000 or use environment variable
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.js
// app.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());
app.use('/api', apiRoutes);
app.use(express.static('public'));  // Serve static files from the 'public' folder

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

