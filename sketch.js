let sound1, sound2, sound3, sound4, sound5;

function preload(){
  sound1 = loadSound("sounds/uke.1.wav");
  sound2 = loadSound("sounds/uke.2.wav");
  sound3 = loadSound("sounds/uke.3.wav");
  sound4 = loadSound("sounds/uke.4.wav");
  sound5 = loadSound("sounds/uke.5.wav");
}

function setup() {
  createCanvas(700, 500);
}

function draw() {}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    background(97, 56, 16);
    noStroke();
    fill('black');
    ellipse(350,250,400);

    sound1.play();

    stroke('white');
    strokeWeight(5);

    line(0, 90, 700, 90);
;  }

  if (keyIsDown(DOWN_ARROW)) {
    sound2.play();
    stroke('white');
    strokeWeight(5);

    line(0, 170, 700, 170);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    sound3.play();
    stroke('white');
    strokeWeight(5);

    line(0, 250, 700, 250);
  }

  if (keyIsDown(LEFT_ARROW)) {
    sound4.play();
    stroke('white');
    strokeWeight(5);

    line(0, 330, 700, 330);
  }

  if (keyIsDown(32)) {
    sound5.play();
    stroke('white');
    strokeWeight(5);

    line(0, 410, 700, 410);
  }
}