let bgcolor = "#c1f9eb";
let wordcolor = "#c79edc";

function setup() {
  let canvas = createCanvas(400, 400);
  //this p5 canvas is added to the container
  //so that we only manipulate the container not the canvas
  canvas.parent("canvas-container");
  background(bgcolor);
}

function draw() {
  //Pattern a: pink, yellow & green
  if (mouseIsPressed) {
    if (key == "a") {
      noStroke();
      fill(255, 210, 200 - mouseX);
      stroke(153, 232, mouseX - 145);
      //mouseX_max = 400, mouseX-145 <=255
      circle(200, 200, 400 - mouseX);
    }
  }

  //change to pattern b
  if (mouseIsPressed) {
    if (key == "b") {
      noStroke();
      fill(100, 210, 200 - mouseX);
      //rect(mouseX,0,20,400);
      stroke(161, 210, mouseX - 145);
      circle(200, 200, 400 - mouseX);
    }
  }
  //change to pattern c
  if (mouseIsPressed) {
    if (key == "c") {
      noStroke();
      fill(152, 200 - mouseX, 244);
      stroke(161, mouseX - 145, 220);
      circle(200, 200, 400 - mouseX);
    }
  }

  //clear backgrounda
  if (key == " ") {
    background(bgcolor);

  }

  //instruction

  console.log(key)

}

