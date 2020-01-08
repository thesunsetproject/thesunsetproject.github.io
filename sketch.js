document.ontouchmove = function(event){
  event.preventDefault();
}

let theShader;
let img;
let pg;

function preload(){
  // load the shader
  theShader = loadShader('basic.vert', 'basic.frag');
  
  // vid = createVideo(['sunset.mp4']);
  // vid.hide();
  // vid.loop();
  img = loadImage("sunset_image02.jpg")
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth,windowHeight);
  noStroke();
  img.resize(windowWidth,windowHeight)
  
  pg = createGraphics(800, 800, WEBGL);
}

function draw() {  
  // shader() sets the active shader with our shader
//   push();
  pg.shader(theShader);

//   // rect gives us some geometry on the screen
  pg.rect(0,0,width, height);
  
  
  img.loadPixels();
    let c = img.get(mouseX,mouseY);
    let c2 = img.get(img.width - mouseX, img.height - mouseY);

  theShader.setUniform('color1', [red(c)/255, green(c)/255,blue(c)/255]);
   theShader.setUniform('color2', [red(c2)/255, green(c2)/255,blue(c2)/255]);
  image(pg,0,0,width,height);
//     pop();
  
//   //dots in mouse position
  fill(c)
  ellipse(mouseX , mouseY , 100,100);
  fill(c2)
  ellipse(width -mouseX, height - mouseY, 100,100);
 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){

  save("thesunsetproject"+".jpg")

}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
