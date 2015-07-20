var Cylon = require("cylon");

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    ledGreen: { driver: 'led', pin: 7 },
    ledBlue: { driver: 'led', pin: 11 },
    ledYellow: { driver: 'led', pin: 15 },
    ledRed: { driver: 'led', pin: 29 }
  },

  work: function(my) {
    my.ledRed.turnOff();
    my.ledGreen.turnOff();
    my.ledBlue.turnOff();
    my.ledYellow.turnOff();

    require("./client")(my);
  }
}).start();
