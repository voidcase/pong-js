playerY = window.innerHeight/2;
playerVel = 0;
playerWidth = 10;
playerHeight = 40;

enemyY = window.innerHeight/2;
enemyXOffset = window.innerWidth-30;

racketSpeed = 2;
racketXOffset = 30;
ballSpeed = 3;
ballSide = 10;
ballXVel = -ballSpeed;
ballYVel = 0;
ballX = window.innerWidth/2;
ballY = window.innerHeight/2;
score = 0;

function resetPositions() {
    playerY = window.innerHeight/2;
    playerVel = 0;
    ballXVel = -ballXVel;
    ballYVel = 0;
    ballX = window.innerWidth/2;
    ballY = window.innerHeight/2;
}

// Welcome to the fullscreen.js file!
// Here you will discover a few new features, such as fullscreen canvas and a render-loop.
// This file is used by the fullscreen.html file, and will not be loaded in the index.html file.

$(document).ready(function() {
    var i = 0;
    var steps = 20;

    function renderFrame(timestamp) {
        // Write your code in here!
        // It will run every time a new frame is drawn
        // Just remember to keep "clear()", otherwise your frames will
        // draw upon each other, creating a beautiful (or not) mess.
        clear();

        //Player logic and drawing
        playerY += playerVel;
        enemyVel = updateEnemyVel();
		enemyY += enemyVel;
        // Player collide with top/bottom
        if(playerY <= 0 || playerY >= window.innerHeight - playerHeight) {
            playerVel = -playerVel;
        }
        drawRectangle(racketXOffset, playerY, playerWidth, playerHeight );
        drawRectangle(enemyXOffset, enemyY, playerWidth, playerHeight );

        //Ball logic and drawing
        ballX += ballXVel;
        ballY += ballYVel;
        // Ball collide with top/bottom
        if(ballY <= 0 || ballY >= window.innerHeight - ballSide) {
            ballYVel = -ballYVel;
        }
        if (ballX <= racketXOffset + playerWidth) { //if ball hit left side
            if (ballY >= playerY && ballY <= playerY + playerHeight) { // if ball
                ballXVel = -ballXVel;
                ballYVel += playerVel;
            } else {
                score--;
                resetPositions();
                console.log("Lose!")
            }
        } else if (ballX >= window.innerWidth - (racketXOffset + playerWidth))
        {
            if (ballY >= enemyY && ballY <= enemyY + playerHeight) { // if ball
                ballXVel = -ballXVel;
                ballYVel += enemyVel;
            } else {
                score++;
                resetPositions();
                console.log("Win!")
            }
        }
        drawRectangle(ballX, ballY, ballSide, ballSide);

        //Enemy logic and drawing

        drawText("Score: " + score, window.innerWidth/2, 30);

        // Tells the browser that the frame has been drawn and that we're ready to draw the next one.
        window.requestAnimationFrame(renderFrame);
    };

	function updateEnemyVel(){
		if (ballY<enemyY) return -2;
		else if (ballY>enemyY) return 2;
		else return 0;
	}

    // This makes sure that the canvas keeps the size of the window if the window size changes.
    $(window).resize(function() {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function onLoad() {
        // If you wish to do something once and only once when the program starts, do it here!
        $(window).resize();
        renderFrame();
    };

    onLoad();
});


