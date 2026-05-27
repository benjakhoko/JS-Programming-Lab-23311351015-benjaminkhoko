// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [64] - { Moving Elements with JavaScript Animation }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= JAVASCRIPT ANIMATION =================

// Create Animation Area
const animationArea = document.createElement("div");

animationArea.style.position = "relative";
animationArea.style.width = "600px";
animationArea.style.height = "300px";
animationArea.style.border = "3px solid black";
animationArea.style.margin = "20px";
animationArea.style.overflow = "hidden";
animationArea.style.backgroundColor = "#f0f0f0";

document.body.appendChild(animationArea);

console.log("Animation Area Created");

// Create Moving Box
const movingBox = document.createElement("div");

movingBox.style.position = "absolute";
movingBox.style.width = "80px";
movingBox.style.height = "80px";
movingBox.style.backgroundColor = "red";
movingBox.style.left = "0px";
movingBox.style.top = "100px";
movingBox.style.display = "flex";
movingBox.style.alignItems = "center";
movingBox.style.justifyContent = "center";
movingBox.style.color = "white";
movingBox.style.fontWeight = "bold";

movingBox.textContent = "MOVE";

animationArea.appendChild(movingBox);

console.log("Moving Box Created");

// ================= START BUTTON =================

const startButton = document.createElement("button");

startButton.textContent = "Start Animation";
startButton.style.margin = "20px";

document.body.appendChild(startButton);

// ================= STOP BUTTON =================

const stopButton = document.createElement("button");

stopButton.textContent = "Stop Animation";
stopButton.style.margin = "20px";

document.body.appendChild(stopButton);

// Animation Variables
let position = 0;
let animation;

// ================= START ANIMATION =================

startButton.addEventListener("click", function () {

    console.log("Animation Started");

    // Prevent multiple intervals
    clearInterval(animation);

    animation = setInterval(function () {

        if (position >= 520) {
            clearInterval(animation);
            console.log("Animation Completed");
        } else {
            position += 5;
            movingBox.style.left = position + "px";

            console.log("Current Position:", position + "px");
        }

    }, 50);

});

// ================= STOP ANIMATION =================

stopButton.addEventListener("click", function () {

    clearInterval(animation);

    console.log("Animation Stopped at Position:", position + "px");

});

console.log("=".repeat(60));
console.log("Moving Elements with JavaScript Animation Executed Successfully!");