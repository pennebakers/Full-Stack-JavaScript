const typewriter = require("./typewriter-effect");

var app = document.getElementById("text");

var typewriter = new Typewriter(app,
{
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Software Engineer')
  .pauseFor(300)
  .start();
