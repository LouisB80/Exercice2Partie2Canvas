var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Boule de glace
function bloc() {
  ctx.fillStyle = "blue";
  ctx.fillRect(25,25,350,350);
  ctx.stroke();
  ctx.fill();
}
function soucoupe() {
  ctx.fillStyle = "lightgrey";
  ctx.beginPath();
  ctx.moveTo(125,200);
  ctx.quadraticCurveTo(200,150,300,200);
  ctx.quadraticCurveTo(200,260,125,200);
  ctx.stroke();
  ctx.fill();
}
function hublot() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(180,180);
  ctx.quadraticCurveTo(210,120,240,180);
  ctx.stroke();
  ctx.fill();
}
function main(){
  bloc();
  soucoupe();
  hublot();
}
main();
