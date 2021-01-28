var startPosition_x=10;
var startPosition_y=10;
var endPosition_x=32;
var endPosition_y=10;
var c,ctx;
var lengthOfGrid=40;
var wallStart=0;
var wall;
var height,width;
// console.log(height);
// console.log(width);
var image1="https://vectorified.com/images/green-dot-icon-7.png";
var flag="https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-flag-512.png";
document.addEventListener('DOMContentLoaded', function() {
c=document.getElementById("myCanvas");
ctx=c.getContext("2d");
player();
makeGrid();

document.getElementById("clear").addEventListener("click", makeGrid);
document.getElementById("path").addEventListener("click",findPath);
document.getElementById("myCanvas").addEventListener('mouseup', function() {
wallStart=0;
});
document.getElementById("myCanvas").addEventListener('mousedown', function() {
wallStart=1;
});
document.getElementById("myCanvas").addEventListener('mousemove',clicking);

});
