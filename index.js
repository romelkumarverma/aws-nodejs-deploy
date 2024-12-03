const express = require('express');
const app = express();

const PORT = 3500;

// Define a simple route
app.get('/get', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
