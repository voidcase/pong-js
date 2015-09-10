ballXVel = -5;
ballYVel = 0;
ballX = window.innerWidth/2;
ballY = window.innerHeight/2;
playerY = window.innerHeight/2;
playerVel = 0;
playerWidth = 10;
playerHeight = 40;
racketSpeed = 4;
racketXOffset = 30;

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
        drawRectangle(racketXOffset, playerY, playerWidth, playerHeight );

        //Ball logic and drawing
        //if (racket)

        //Enemy logic and drawing

        // Tells the browser that the frame has been drawn and that we're ready to draw the next one.
        window.requestAnimationFrame(renderFrame);
    };

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
