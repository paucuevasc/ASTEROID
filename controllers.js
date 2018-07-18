var anchoPantalla=window.screen.width;
var altoPantalla=window.screen.height;
var posEnemigo=[100,100];
var posShip=[anchoPantalla/2,altoPantalla/2];
document.querySelector("#shipPosition").style.top=posShip[1]+ 'px';
document.querySelector("#shipPosition").style.left=posShip[0]+ 'px';
     
var ang=0;

function shipRotator(){
var mouseX = window.event.clientX;
var mouseY = window.event.clientY;

    
    
    if (posShip[1]<mouseY){
        ang+=20;
        } else if (posShip[1]>mouseY) {
          ang-=20;    
        } else {
             ang=ang;
        };
   if (posShip[0]<mouseX){
        ang+=20;
        } else if (posShip[0]>mouseX) {
          ang-=20;    
        } else {
           ang=ang;
        };
    console.log(ang);
     document.getElementById("shipPosition").style.transform='rotate('+ang+'deg)';
     
  
    return ang;
    }

function posEnemy(){
    var mouseX = window.event.clientX;
    var mouseY = window.event.clientY;
    
    
    if (posEnemigo[1]<mouseY){
        posEnemigo[1]+=20;
        } else if (posEnemigo[1]>mouseY) {
          posEnemigo[1]-=20;    
        } else {
            posEnemigo[1]=posEnemigo[1];
        };
   if (posEnemigo[0]<mouseX){
        posEnemigo[0]+=20;
        } else if (posEnemigo[0]>mouseX) {
          posEnemigo[0]-=20;    
        } else {
            posEnemigo[0]=posEnemigo[0];
        };
    console.log(posEnemigo);
     var elem=document.getElementById("planetPosition");
 elem.style.top = posEnemigo[1]+ 'px';
 elem.style.left = posEnemigo[0]+ 'px';
  
    return posEnemigo;
    }