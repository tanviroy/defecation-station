var poopArray = [];
var poopImage = new Image();
poopImage.src = "./images/poop.png";
infinitePoop();

function infinitePoop (){
    var poopIndex = 0;
    setInterval(function(){
        addPoop();
        fallingPoop(poopArray[poopIndex]);
        poopIndex++;
    }, 2000)
}

// function to create one random poop
function addPoop() {
    var rand = Math.floor(Math.random() * 1000);
    thePoop = {
        x: 0, 
        y: 0, 
        width:70,
        height:70 
    };
    thePoop.x = rand;
    poopArray.push(thePoop);
}

// function for falling effect
function fallingPoop (poop){
    var id = setInterval(function(){
        poop.y+=8
        if(poop.y > screen.width){
            clearInterval(id)
        }
    },100)
}

// function to draw many poops
function drawAllthePoops(){
    //  console.log("falling");
   poopArray.forEach(function(poop){
        ctx.drawImage(poopImage,poop.x, poop.y,poop.width, poop.height)
   }) 
}