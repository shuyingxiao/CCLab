let img;

function preload(){
  img = loadImage("images/image1.png")

}

function setup() {
  createCanvas(400, 400);
  background(220);

  console.log(img.width);
}

function draw() {
  image(img, 0, 0)
  //
}

