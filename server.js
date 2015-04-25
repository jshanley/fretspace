var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('coming soon(er or later)');
})

var port = process.env.PORT;

app.listen(port, function() {
  console.log('listening on port', port + '...');
})
