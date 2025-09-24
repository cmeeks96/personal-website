const express = require('express');
const app = express();
const path = require('path');

// Serve static files (so the PDF can be accessed)
app.use(express.static(path.join(__dirname, 'static')));

// Redirect root URL directly to your PDF
app.get('/', (req, res) => {
  res.redirect('/connormeeks.pdf');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;