function setup(){
  createCanvas(500,500);
  db = firebase.database()
  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";
  //reading the values from database
  db.ref("Ball/position").on("value", function(data){
    var pos = data.val()
    ball.x = pos.x
    ball.y = pos.y
  })
}

function draw(){
  background("white");
  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
  drawSprites();
}

function changePosition(x,y){
  //writing the values in the database
  db.ref("Ball/position").set({
    x: ball.x + x,
    y: ball.y + y
  })
}