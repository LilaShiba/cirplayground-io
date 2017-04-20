var Playground = require("playground-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Playground({
    port: "/dev/cu.usbmodem1421"
  })
});
board.on("ready", function() {

  var thermometer = new five.Thermometer({
    controller: Playground.Thermometer,
    freq: 100
  });


  var light = new five.Sensor({
    pin: "A5",
    freq: 100
  });

  board.loop(1000, () => {
    console.log("Raw Light: %d", light.value);
  });

 

  thermometer.on("change", (data) => {
    console.log("Celcius: %d", data.C);
  });

  
});