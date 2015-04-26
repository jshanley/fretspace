var express = require('express');

var app = express();

app.use('/assets', express.static(__dirname + '/assets/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/home.html');
})

var port = process.env.PORT || 4000;

app.listen(port, function() {
  console.log('listening on port', port + '...');
})
