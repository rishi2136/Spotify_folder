// Import required modules
const express = require('express');
const path = require("path");

// Create an instance of Express
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file

app.get('/', (req, res) => {
  res.render('index.ejs');
});



// Start the server
const port = process.env.PORT || 3000; // Use environment port or 3000 if not set
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
