var spaceImg;
var gameStateValue = 0
var playerCountValue = 0;
var gameObj,formObj,playerObj;

function preload(){
  spaceImg = loadImage("images/space.png");
}

function setup() {
  createCanvas(500, 300);
  database = firebase.database();
  formObj = new Form();
  gameObj = new Game();
  gameObj.readGameState();
  gameObj.start();
}

function draw() {
  background(spaceImg); 
  formObj.display();
}