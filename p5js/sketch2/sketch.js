function setup(){
    createCanvas(480,500);
  }
  
  function draw(){
    let c = color(100, 204, 200);
  
  
    if(mouseIsPressed){
      fill(0);
    } else {
      fill(c);
    }rect(mouseX,mouseY,80,150);
  }