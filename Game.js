//Basic setup: 
let ship_width = 100
let ship_height = 30

let bullet_width = 10
let bullet_height = 20

//enemy ships
let initialNumEnemies = 10
let enemy_width = 90
let enemy_height = 30
let enemySpeed = 2;
let enemyCoords = [];
for(let i=0; i<initialNumEnemies; i++){
    // each enemy has x, y coordinates and direction (initially 1)
    enemyCoords.push([100 * i, 40 * i, 1]);
}

//ship movement
let lol = 10
let kol = 10

let lowerEnemyRate = 300;
let frameCounter = 0;

let canvasWidth = 1000
let canvasHeight = 1000
function setup(){
    createCanvas(canvasWidth, canvasHeight)
    background(55);
}
let ShipX = canvasWidth/2 - ship_width/2
let ShipY = 900  

//bullets
const bullets = []
let bullheight = 20
let bullwidth = 5
let xy = [ShipX/*+ ShipX / 2 - bullwidth/2*/, ShipY - 20]


function keyPressed(){
    if (keyCode === SHIFT){
        
    bullets.push(xy)

    }
}

function drawGame(){
    // draw ship
    rect(ShipX , 900, ship_width, ship_height);
    // draw bullets
    for(i = 0; i < bullets.length; i++){
        let x = bullets[i][0]
        let x2 = x + ship_width/2
        let y = bullets[i][1]
        rect(x2, y, bullwidth, bullheight)
    }
    // draw enemies
    for(let i = 0; i<initialNumEnemies; i++){
        rect(enemyCoords[i][0], enemyCoords[i][1], enemy_width, enemy_height);
    }
}
    


function nextStep(){
    if(keyIsDown(LEFT_ARROW) && 0 < ShipX){
        ShipX = ShipX - 10
        xy = [ShipX /*+ ShipX / 2 - bullwidth/2*/, ShipY - 20]
    }
    if(keyIsDown(RIGHT_ARROW) && ShipX < 1000 - ship_width){
        ShipX = ShipX + 10
        xy = [ShipX /*+ ShipX / 2 - bullwidth/2*/, ShipY - 20]
    }
    for(let i = 0; i < bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 5
    }
    // update direction

    for(let i = 0; i < enemyCoords.length; i++){
        // if hit right wall
        //if(i%2 == 0){
            if(enemyCoords[i][0] >= 1000 - enemy_width){
                enemyCoords[i][2] = -5;
            }
            // if hit left wall
            if(enemyCoords[i][0] <= 0){
                enemyCoords[i][2] = 5;
            }
        //}

        // move x coordinate
        enemyCoords[i][0] += enemyCoords[i][2] * enemySpeed;
    }

    frameCounter++;
    if(frameCounter%lowerEnemyRate == 0){
        for(i = 0 ; i < enemyCoords.length; i++){
            enemyCoords[i][1] += 10
        }
    }
}


function draw(){
    background(55);
    drawGame();
    nextStep();
}