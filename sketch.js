var fireworks = [];
var gravity;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  
  stroke(255);
  strokeWeight(4);
  
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  text("Happy birthday Aditi!!", 150,100);
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
   }
  for (var i = fireworks.length-1; i >= 0; i--) {
     fireworks[i].update();
     fireworks[i].show();
     if (fireworks[i].done()) {
       //fireworks.spilce(i, 1);
     }
   }
   console.log(fireworks.length);
  
}
