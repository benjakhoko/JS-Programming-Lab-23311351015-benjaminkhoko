// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [68] - { Smooth Element Movement (Animation Loop) }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= SMOOTH ELEMENT MOVEMENT =================

// Create Animation Area
const animationArea = document.createElement("div");

animationArea.style.width = "800px";
animationArea.style.height = "400px";
animationArea.style.border = "3px solid black";
animationArea.style.margin = "20px";
animationArea.style.position = "relative";
animationArea.style.overflow = "hidden";
animationArea.style.backgroundColor = "#f5f5f5";

document.body.appendChild(animationArea);

console.log("Animation Area Created");

// ================= CREATE MOVING BALL =================

const movingBall = document.createElement("div");

movingBall.style.width = "60px";
movingBall.style.height = "60px";
movingBall.style.borderRadius = "50%";
movingBall.style.backgroundColor = "blue";
movingBall.style.position = "absolute";
movingBall.style.left = "0px";
movingBall.style.top = "150px";

animationArea.appendChild(movingBall);

console.log("Moving Ball Created");

// ================= CREATE BUTTONS =================

const startButton = document.createElement("button");
startButton.textContent = "Start Movement";
startButton.style.margin = "10px";

document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.textContent = "Stop Movement";
stopButton.style.margin = "10px";

document.body.appendChild(stopButton);

// ================= ANIMATION VARIABLES =================

let positionX = 0;
let animationId;
let isMoving = false;

// ================= ANIMATION FUNCTION =================

function moveBall() {

    // Increase position
    positionX += 2;

    // Update position
    movingBall.style.left = positionX + "px";

    console.log("Ball Position:", positionX + "px");

    // Reset when reaching boundary
    if (positionX >= 740) {
        positionX = 0;
        console.log("Ball Reset to Start");
    }

    // Continue animation loop
    animationId = requestAnimationFrame(moveBall);
}

// ================= START BUTTON EVENT =================

startButton.addEventListener("click", function () {

    if (!isMoving) {

        console.log("Animation Started");

        isMoving = true;

        moveBall();
    }

});

// ================= STOP BUTTON EVENT =================

stopButton.addEventListener("click", function () {

    cancelAnimationFrame(animationId);

    isMoving = false;

    console.log("Animation Stopped");

});

console.log("=".repeat(60));
console.log("Smooth Element Movement Program Executed Successfully!");