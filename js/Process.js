function clicking(event){
  let rect=c.getBoundingClientRect();
  var pos_sx=event.clientX - rect.left;
  // rect=c.getBoundingClientRect();
  var pos_sy=event.clientY - rect.top;
  // console.log(pos_x);
  //   console.log(c.left);
  // console.log(pos_y);
  if(wallStart==1)
  makeWall(event);
}

function makeWall(event){
  let rect=c.getBoundingClientRect();
  var pos_sx=event.clientX - rect.left;
  // console.log(pos_sx);
  // console.log(event.clientX);
  // console.log(rect.left);
  // rect=c.getBoundingClientRect();
  var pos_sy=event.clientY - rect.top;
  pos_sx=Math.floor(pos_sx/lengthOfGrid);
  pos_sy=Math.floor(pos_sy/lengthOfGrid);
  wall[pos_sx][pos_sy]=true;
  base_image=new Image();
	base_image.src='https://static.vecteezy.com/system/resources/previews/000/116/067/original/vector-stone-texture-vector-background.jpg';
  if(pos_sx==startPosition_x && pos_sy==startPosition_y)return;
  if(pos_sx==endPosition_x && pos_sy==endPosition_y)return;
  ctx.drawImage(base_image,pos_sx * lengthOfGrid + 1, pos_sy * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2)
}
