
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [67] - { Mouse Tracking and Cursor Effects }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= MOUSE TRACKING AND CURSOR EFFECTS =================

// Create Tracking Area
const trackingArea = document.createElement("div");

trackingArea.style.width = "700px";
trackingArea.style.height = "400px";
trackingArea.style.border = "3px solid black";
trackingArea.style.margin = "20px";
trackingArea.style.position = "relative";
trackingArea.style.backgroundColor = "#f0f0f0";
trackingArea.style.cursor = "crosshair";

document.body.appendChild(trackingArea);

console.log("Tracking Area Created");

// Create Cursor Follower
const cursorFollower = document.createElement("div");

cursorFollower.style.width = "25px";
cursorFollower.style.height = "25px";
cursorFollower.style.borderRadius = "50%";
cursorFollower.style.backgroundColor = "red";
cursorFollower.style.position = "absolute";
cursorFollower.style.pointerEvents = "none";

trackingArea.appendChild(cursorFollower);

console.log("Cursor Follower Created");

// Create Position Display
const positionText = document.createElement("h3");

positionText.textContent = "Mouse Position: X = 0 , Y = 0";

document.body.appendChild(positionText);

// ================= MOUSE MOVE EVENT =================

trackingArea.addEventListener("mousemove", function (event) {

    // Get mouse coordinates
    const x = event.offsetX;
    const y = event.offsetY;

    // Update follower position
    cursorFollower.style.left = x + "px";
    cursorFollower.style.top = y + "px";

    // Update text display
    positionText.textContent = `Mouse Position: X = ${x} , Y = ${y}`;

    // Console output
    console.log("Mouse Coordinates:", "X =", x, "Y =", y);

});

// ================= MOUSE ENTER EVENT =================

trackingArea.addEventListener("mouseenter", function () {

    console.log("Mouse Entered Tracking Area");

    trackingArea.style.backgroundColor = "#dff0ff";

});

// ================= MOUSE LEAVE EVENT =================

trackingArea.addEventListener("mouseleave", function () {

    console.log("Mouse Left Tracking Area");

    trackingArea.style.backgroundColor = "#f0f0f0";

});

// ================= CLICK EFFECT =================

trackingArea.addEventListener("click", function (event) {

    console.log("Mouse Clicked at:", event.offsetX, event.offsetY);

    // Create temporary click effect
    const clickEffect = document.createElement("div");

    clickEffect.style.width = "40px";
    clickEffect.style.height = "40px";
    clickEffect.style.borderRadius = "50%";
    clickEffect.style.border = "3px solid blue";
    clickEffect.style.position = "absolute";
    clickEffect.style.left = (event.offsetX - 20) + "px";
    clickEffect.style.top = (event.offsetY - 20) + "px";

    trackingArea.appendChild(clickEffect);

    // Remove effect after 500ms
    setTimeout(function () {
        clickEffect.remove();
    }, 500);

});

console.log("=".repeat(60));
console.log("Mouse Tracking and Cursor Effects Executed Successfully!");