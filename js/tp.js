var tpArray = [];
var tpImage = new Image();
tpImage.src = "./images/tp.png";
infiniteTP();

var tpIndex = 0;
function infiniteTP (){
    setInterval(function(){
        addTP();
        fallingTP(tpArray[tpIndex]);
        tpIndex++;
    } , 2000)
}

// function to create one random TP
function addTP() {
    var rand = Math.floor(Math.random() * 1000);
    var theTP ={
        x: 0, 
        y: 0, 
        width:110,
        height:80
    };
    theTP.x = rand;
    tpArray.push(theTP);
}

// function for falling effect
function fallingTP (TP) {
    var id = setInterval(function(){
        TP.y+=8
        if(TP.y > 1000){
            clearInterval(id)
        }
    }, 100)
}

// function to draw many TPs
function drawAllTheTPs(){
    // console.log("falling");
    tpArray.forEach(function(TP){
        ctx.drawImage(tpImage, TP.x, TP.y,TP.width,TP.height)
    })
}