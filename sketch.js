let font;
let sqBrush;
let rdBrush;
let erBrush;
let bg;
let currentcolor;
let brushShape;
let colorSlider;

function preload(){}
function setup() {
  createCanvas(384, 224);
  background(220);
  strokeJoin(MITER);

  //colorSlider = createSlider()
  let button1 = createButton("Save your Work");
  button1.parent("buttoid");
  button1.mousePressed(saveWork)

  let button2 = createButton("Delete your Work");
  button2.parent("buttoid");
  button2.mousePressed(dltWork)

  //let sqBrush = new Brush()
  //let rdBrush = new Brush()
  //let erBrush = new Brush()
}

function draw() {
  //sqBrush.display()
  //rdBrush.display()
  //erBrush.display()
}

//function keyReleased(){
  //if (key == 'B'||key == 'b')
//}
function saveWork(){
  //image()
  saveCanvas("seeyanextgame.jpg");
}

function dltWork(){
  background(220);
}

//function mousePressed() {
  //if (mouseX < width && mouseX > 0) {
    //if (mouseY < height && mouseY > 0) {
      //image(if i can get the class in here, it's that, mouseX, mouseY, 15, 15);
    //}
  //}
//}


//class Brush{constructor(c,xpos,ypos,bsize){
//this.c = c;
//this.xpos = xpos;
//this.ypos = ypos;
//this.bsize = bsize;}
 //display(){
 //noStroke();
 //fill(this.c);
 //}
//}