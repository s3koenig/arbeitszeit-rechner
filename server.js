const express = require('express');
const path = require('path');
const app = express();

app.use('/arbeitszeit-rechner', express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, function() {
    console.log('App listen on port 9000!')
});