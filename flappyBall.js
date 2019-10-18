//Very rough work, need to refactor
let cvs = document.getElementById("flappyBallCanvas");
let ctx = cvs.getContext("2d");

let hand = new Image();
let handUp = new Image();
let handDwn = new Image();
let bg = new Image();
var fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
hand.src = "./images/handUp.png";
handUp.src = "./images/handUp.png";
handDwn.src = "./images/handDown.png";
bg.src = "./images/cyberBg.png";
fg.src = "./images/fg.png"
pipeNorth.src = "./images/pipeNorth.png";
pipeSouth.src = "./images/pipeSouth.png";

var gap = 85;
var constant;
var hX = 10;
var hY = 150;
var gravity = 1.2;
var score = 0;
var handOr = false;

// document.addEventListener("keydown", function(event){
//     switch(event.keyCode){
//         case 38: //up arrow
//             moveUp();
//             break;
//         case 13: //enter key
//             gameStart();
//             break;
//     }
// });
document.addEventListener("keydown", moveUp);
function moveUp(){
    // draw();
    hY -= 30;
    if(handOr){
        hand=handUp;
    }else{
        hand=handDwn;
    }
    handOr=!handOr;
}
function gameStart(){
    draw();
}

var pipe = [];
pipe[0] = {
  x : cvs.width,
  y : 0
};

function draw(){
    //ctx.drawImage(hand,hX,hY);
    //var gameOver = false;    
    ctx.drawImage(bg,0,0);
    for(var i = 0; i < pipe.length; i++){   
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        pipe[i].x--;
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }
        // collision detection
        if( hX + hand.width >= pipe[i].x && hX <= pipe[i].x + pipeNorth.width && 
            (hY <= pipe[i].y + pipeNorth.height || hY+hand.height >= pipe[i].y+constant) || 
            hY + hand.height >=  cvs.height - fg.height || hY<0){
            //ctx.fillText("GAME OVER "+score,15,cvs.height-10);
            //gameOver = true;
            location.reload(); // gameover is simple reload
        }
        if(pipe[i].x == 5){
            score++;
        }
    }
    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(hand,hX,hY);
    hY += gravity;
    ctx.fillStyle = "#66FCF1";
    ctx.font = "30px Arial";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    //requestAnimationFrame(draw);
    //animateWithFpsLock(60);
}


function animateWithFpsLock(fps){
    console.log("--IN: animateWithFpsLock");
    var fpsInterval, then;
    fpsInterval = 1000/fps;
    then = Date.now();
    animate(then,fpsInterval);
}

function animate(then,fpsInterval){
    
    //var fpsInterval, startTime, now, then, elapsed;

    //fpsInterval = 1000/fps;
    //then = Date.now();
    //startTime = then;
    console.log(" ++IN: animate with then "+ then);
    //console.log(" ++IN: animate with elapsed "+ elapsed);
    requestAnimationFrame(function(){
        animate(then,fpsInterval);
    });

    var now = Date.now();
    var elapsed = now - then;
    console.log(" ++IN: animate with elapsed "+ elapsed);
    
    if(elapsed > fpsInterval){
        console.log("  --in: if(elapsed...");
        then = now - (elapsed % fpsInterval);
        draw();
    }
    // draw();
    // var fpsInterval = 1000 / fps;
    // var nextTime = fpsInterval+timestamp;
    // var currTime = Date.parse(new Date());

    // while(currTime<=nextTime){
    //     currTime = Date.parse(new Date());
    // }
    // animateWithFpsLock(fps,Date.parse(new Date()));
}
    //console.log("blaaaah");
    //draw();
    //var fpsInterval = 1000 / fps;
    //var nextTime = fpsInterval+timestamp;

    //while(Date.parse(Date())<=nextTime);
    //animateWithFpsLock(fps,Date.parse(new Date()));

//draw();
animateWithFpsLock(60);