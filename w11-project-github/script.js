function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas")
  console.log(canvas);
  background(0);
}

function draw() {
  //circle(random(width), randoma(height), random(10, 20));
  //
  stroke(255);
  line(width / 2, height / 2, mouseX, mouseY);
}