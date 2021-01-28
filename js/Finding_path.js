let parent,path;

function findPath(){
  shortestPath();
  // console.log(parent);
  var temp={
    x: endPosition_x,
    y: endPosition_y
  }
  var get=0;
  let final_path=new Array();
  while(temp.x!=startPosition_x || temp.y!=startPosition_y ){
    if(get)
    final_path.push(temp);
    else get=1;
    temp=parent[temp.x][temp.y];
  }
  final_path.push({startPosition_x,startPosition_x});
  final_path.reverse();
  // console.log(final_path);
  setTimeout(function() {
    drawPath(final_path, yellow)
  }, 2000);
}


function shortestPath() {
    let used = makeArray(false, height+20, width+20);
    used[startPosition_x][startPosition_y] = true;

    // let parent = makeArray(, length, height);
    parent=new Array(height+20);
    for(let i=0;i<height+20;i++){
      parent[i]=new Array(width+20);
      for(let j=0;j<width+20;j++){
        parent[i][j]={
          x:0,
          y:0
        };
      }
    }
    // return array;
    console.log(used);
    let q = new Queue();
    q.push({x: startPosition_x, y:startPosition_y});

    path = new Array();
    while (!q.isEmpty()) {
        let position = q.front();
        // console.log(position);
        q.pop();
        path.push(position);
          var pos_x=position.x,pos_y=position.y;
        // if(pos_x==startPosition_x && pos_y==startPosition_y)break;
        if(pos_x==endPosition_x && pos_y==endPosition_y)break;
        // if (position.isEqual({endPosition_x,endPosition_y})) break;


        for (let dx = -1; dx <= 1; ++dx) {
            for (let dy = -1; dy <= 1; ++dy) {
              // console.log(length);
              // console.log(width);
                if (Math.abs(dx) + Math.abs(dy) == 2) continue;
                if (!((pos_x + dx <= width) && (pos_x + dx >=0) &&  (pos_y + dy)>=0 && (pos_y + dy)<=height)) continue;
                // console.log(pos_x+dx);
                // console.log(pos_y+dy);
                // console.log(pos_x + dx);
                // console.log(pos_y + dy);
                if (used[pos_x + dx][pos_y + dy]) continue;
                if (wall[pos_x + dx][pos_y + dy]) continue;
                parent[pos_x + dx][pos_y + dy] = position
                used[pos_x + dx][pos_y + dy] = true;
                // let pos_x=position[0] + dx,pos_y=position[1] + dy;
                q.push({x:pos_x+dx, y: pos_y+dy});
            }
        }
    }
    // console.log(used);

}

function drawPath(path, color) {
	if (path.length === 0) {

		return;
	}
	let position = path[0];
	path.shift();
	// ctx.fillStyle = "#16c79a";
  //
	// 	ctx.beginPath();
	// 	ctx.arc(position.x * lengthOfGrid +lengthOfGrid / 2, position.y * lengthOfGrid + lengthOfGrid/ 2, 4, 0, 2 * Math.PI);
	// 	ctx.fill();

	setTimeout(function() {
        base_image=new Image();
        base_image.src=image1;
				// ctx.arc(position.x * lengthOfGrid + lengthOfGrid / 2, position.y * lengthOfGrid + lengthOfGrid / 2, 11.5, 0, 2 * Math.PI);
        ctx.drawImage(base_image,position.x * lengthOfGrid + 1, position.y * lengthOfGrid + 1, lengthOfGrid - 2, lengthOfGrid - 2);
      	// ctx.fill();
			}, 500);


	setTimeout(function() {
	drawPath(path, color);
}, 10);
}
