let fillB = 0
let fillG = 0
let fillR = 0

var Thing = function(x,y){
    var alpha = 255;
    this.gone = false;
   this.show = function(){
      fill(fillR,fillG,fillB, alpha);
      ellipse(x,y,20,20);

      //Decrease opacity for fade effect
      alpha -= 10;
      if(alpha < 0){
        //sets if item is out of view
        this.gone = true;

      }
   }

}

function whiteB() {
  fillR = 255
  fillG = 255
  fillB = 255
}

function blueB() {
  fillR = 0
  fillG = 0
  fillB = 255

}

function greenB() {
  fillR = 0
  fillG = 255
  fillB = 0
}

function redB() {
  fillR = 255
  fillG = 0
  fillB = 0
}
