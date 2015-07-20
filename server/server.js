var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.resolve('./public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/api/:led/:position', function(req, res) {
  var led = req.params.led;
  var position = req.params.position || 'on';

  var message = {
    enable : position === 'on',
    color: req.params.led
  };

  io.emit('led', message);

  res.sendStatus(200);
});

var port = process.env.port || 3000;
var server = app.listen(port, function() {
  console.log('listening on *:' + port);
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});
