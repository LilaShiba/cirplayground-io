var Playground = require("playground-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Playground({
    port: "/dev/cu.usbmodem1421"
  })
});
board.on("ready", function() {

  /**
   * Playground Controllers
   */

  var pixels = new five.Led.RGBs({
    controller: Playground.Pixel,
    pins: [0, 2, 4, 6, 8]
  });

   var pixels_odd = new five.Led.RGBs({
    controller: Playground.Pixel,
    pins: [1, 3, 5, 7, 9]
  });
  /**
   * Events and Data Handling
   */
  var index = 0;
  var colors = [
    
    "red",
    "white",
    "blue",
    
  ];


  var colors_odd = [
    
    "blue",
    "red",
    "white",
    
  ];

  setInterval(() => {
    pixels.forEach(pixel => pixel.color(colors[index]));
    if (++index === colors_odd.length) {
      index = 0;
    }
  }, 100);

    setInterval(() => {
    pixels_odd.forEach(pixel => pixel.color(colors[index]));
    if (++index === colors.length) {
      index = 0;
    }
  }, 100);
});