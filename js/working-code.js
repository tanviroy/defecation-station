var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// set width and height for toilet
var toilet = {
  x: 600,
  y: 450,
  width: 200,
  height:200
}

updateCanvas(); 

// set height and width of canvas
var canvasWidth = (screen.width + 1);
var canvasHeight = (screen.height +1);
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// scoring functionality, Calling $('#id') will return a jQuery object that wraps the DOM object and provides jQuery methods., .html is A function returning the HTML content to set and returns as String
var score = 0;
function ShowScore(){
  $(".score").html(score);

}
function AddPoints(pointsToAdd){
  score += pointsToAdd;
}
function LosePoints(pointsLost){
  score -= pointsLost;
}

// sets the toilet's image
var toiletImage = new Image();
toiletImage.src = './images/toilet.png';


// draws toilet 
function drawtoilet(){
  ctx.drawImage(toiletImage,toilet.x,toilet.y, toilet.width, toilet.height)
}


// controls movement
document.onkeydown = function (e) {
  console.log("Buttons working");
  if (e.which === 38){
    toilet.y -= 20;
  }
  else if (e.which === 40)
  {
    toilet.y += 20;
  }
  else if (e.which === 37){
    toilet.x -= 20;
  }
  else if (e.which === 39){
    toilet.x += 20;
  }
}
  
 // collision detection, set y property 
function poopCollision() {
  poopArray.forEach(function(poop) {
    let toiletLeft = toilet.x;
    let toiletRight = toilet.x + toilet.width/2;
    let toiletTop = toilet.y;
    let toiletBottom = toilet.y + toilet.height/2;
    let poopLeft = poop.x;
    let poopRight = poop.x + poop.width/2;
    let poopTop = poop.y;
    let poopBottom = poop.y + poop.height;
    if(toiletLeft <= poopRight && poopLeft <= toiletRight && toiletBottom <= poopBottom  && poopTop <= toiletBottom){
      poop.y = 1444;
      AddPoints(10);
    }
    })
}

function TPCollision() {
  tpArray.forEach(function(TP) {
    let toiletLeft = toilet.x;
    let toiletRight = toilet.x + toilet.width/2;
    let toiletTop = toilet.y;
    let toiletBottom = toilet.y + toilet.height/2;
    let TPLeft = TP.x;
    let TPRight = TP.x + TP.width/2;
    let TPTop = TP.y;
    let TPBottom = TP.y + TP.height;
    if(toiletLeft <= TPRight && TPLeft <= toiletRight && toiletBottom <= TPBottom  && TPTop <= toiletBottom){
      TP.y = 1444;
      LosePoints(10);
    }
  });
}


function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawtoilet();
    drawAllthePoops();
    drawAllTheTPs();
    TPCollision();
    poopCollision();
    ShowScore();
  },100)
}