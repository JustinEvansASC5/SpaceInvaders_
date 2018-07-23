// use variables to represent the "state" of the game - information that represents what is going on
let spaceshipX = 10;
let bullets = [];
let enemies = [];
// draw our canvas
function setup(){
    createCanvas(500, 500);
}
// update the game state when a key or mouse is pressed
function mousePressed(){
    const x_y = [mouseX, mouseY];
    bullets.push(x_y);
}
// function that draws the state of the game
function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        rect(x, y, 5, 5);
    }
}
// updates the game state every step
function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
}
function draw(){
    background(0); // black out the previous frame
    drawGame(); // redraw the game
    nextStep(); // update the game state
}