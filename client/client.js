var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

socket.on('connect', function () {
  console.log('Client connected');
});

socket.on('disconnect', function () {
  console.log('Client disconnected');
});

console.log('start');

var ledMap = {
  'yellow' : 'ledYellow',
  'red' : 'ledRed',
  'green' : 'ledGreen',
  'blue' : 'ledBlue',
};

module.exports = function setup (my) {
  socket.on('led', function (data) {
    console.log(data);
    var localLedId = ledMap[data.color];
    var ledInstance = my[localLedId];

    if (data.enable) {
      ledInstance.turnOn();
    } else {
      ledInstance.turnOff();
    }
  });
};
