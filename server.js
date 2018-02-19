var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'script')));
app.use(express.static(path.join(__dirname, 'style')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});