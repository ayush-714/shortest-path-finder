function makeGrid() {
  	// base_image=new Image();
    // base_image.src='https://lawnandgrounds.co.uk/wp-content/uploads/2020/05/AdobeStock_108899821-scaled-e1589578143399-1024x1024.jpeg';
    height=Math.floor(c.height/lengthOfGrid),width=Math.floor(c.width/lengthOfGrid);
    console.log(height);
    console.log(width);
    ctx.clearRect(0, 0, c.width, c.height);
    // console.log(c.height);
  //   base_image = new Image();
  // base_image.src = 'https://lawnandgrounds.co.uk/wp-content/uploads/2020/05/AdobeStock_108899821-scaled-e1589578143399-1024x1024.jpeg';
  // base_image.onload = function(){
  //   ctx.drawImage(base_image, 100, 100);
  // }
    // ctx.drawImage(base_image,100,100);
    wall= makeArray(false,height+20,width+20);
// ctx.lineWidth=0.1;
    for (let i = 0; i < c.width; i += lengthOfGrid) {
      ctx.moveTo(i, 0);
      // ctx.lineWidth=0.1;
      ctx.lineTo(i, c.height);
      ctx.stroke();
    }
    // console.log(wall);
    for (let i = 0; i < c.height; i += lengthOfGrid) {
      // ctx.lineWidth=0.1;
      ctx.moveTo(0, i);

      ctx.lineTo(c.width, i);
      ctx.stroke();
    }
  // ctx.drawImage(base_image,100,100);
    // base_image=new Image();
    // base_image.src="https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-flag-512.png";
    // ctx.drawImage(base_image,startPosition_x* lengthOfGrid + 1, startPosition_y * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2);
    // https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-flag-512.png
    // drawPoint(green, endPosition_x, endPosition_y);
    // drawPoint(yellow, startPosition_x, startPosition_y);
    player();
}

function player(){
  base_image=new Image();
  base_image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png";
  ctx.drawImage(base_image,startPosition_x* lengthOfGrid + 1, startPosition_y * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2);
  const finalFlag="https://static.vecteezy.com/system/resources/previews/000/330/773/original/vector-flag-flat-multi-color-icon.jpg";
  base_image=new Image();
  base_image.src=flag;
  ctx.drawImage(base_image,endPosition_x* lengthOfGrid + 1, endPosition_y * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2);

}
function drawPoint(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * lengthOfGrid + 1, y * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2);
}

function makeArray(value,height_,width_) {
  var array=new Array(height_);
  for(let i=0;i<height_;i++){
    array[i]=new Array(width_);
    for(let j=0;j<width_;j++){
      array[i][j]=value;
    }
  }
  return array;
}
