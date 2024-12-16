let font;
let sqBrush;
let swBrush = 0;
let erBrush;
let sizeSlider;
let brightSlider;
let satSlider;
let myBtl1;
let myBtl2;



function setup() {
  canvas = createCanvas(900, 300);
  canvas.parent('canvoid')
  rectMode(CENTER);
  angleMode(DEGREES);
  background(0,5,73);
  colorMode(HSB);
   
  sizeSlider = createSlider(1,10,1)
  sizeSlider.parent('buttoid');
  sizeSlider.value(10)

  let button1 = createButton("Save your Work");
  button1.position("buttoid");
  button1.mousePressed(saveWork)

  let button2 = createButton("Delete your Work");
  button2.parent("buttoid");
  button2.mousePressed(dltWork)

  colorPicker = createColorPicker('#000000');
  colorPicker.position(width/1.05,height/1.25);
  myBtl1 = new Btl(color(242,69,22),35,280);
  myBtl2 = new Btl(color(242,69,22),85,280);


}

function draw() {
  myBtl1.display();
  myBtl2.display();

  noStroke();
  fill(236,92,23);
  rect(450,0,width,height/4);
  

  if (mouseIsPressed){
    noStroke();
   fill(colorPicker.color());
    rect(mouseX, mouseY,sizeSlider.value());
  }
  }


function saveWork(){
  saveCanvas("seeyanextgame.jpg");
}

function dltWork(){
  background(236,100,29);
}

class Btl {
  constructor(c, xpos, ypos) {
    this.c = c;
    this.xpos = xpos;
    this.ypos = ypos;
  }
  display() {
    noStroke();
    fill(240, 61, 14);
    ellipse(this.xpos, this.ypos, 25, 50);
    fill(this.c);
    arc(this.xpos, this.ypos - 15, 20, 25, 180, 0);
    fill(238, 45, 68);
    rect(this.xpos, this.ypos + 5, 2, 40, 0, 0, 5, 5);
    rect(this.xpos - 10, this.ypos - 15, 2, 25);
    rect(this.xpos + 10, this.ypos - 15, 2, 25);
  }
}
