const express = require('express');
const app = express();
const path = require('path');

// Path to static directory
app.use(express.static('static'));

// Response
app.get('/', (req, res) => {
    // res.status(200).send("hello!").end();
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;

