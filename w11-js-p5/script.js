function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 5);
    let x = random(width / 2);
    let y = random(height / 2);
    let dia = random(3, 15);

    noFill();
    stroke(255);
    circle(x, y, dia);

}

function showAlert() {
    alert('Hey!');
}