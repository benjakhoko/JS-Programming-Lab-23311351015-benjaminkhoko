
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [69] - { Drag and Drop Implementation }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));



// Create Drag Area
const dragArea = document.createElement("div");

dragArea.style.width = "800px";
dragArea.style.height = "400px";
dragArea.style.border = "3px solid black";
dragArea.style.margin = "20px";
dragArea.style.position = "relative";
dragArea.style.backgroundColor = "#f5f5f5";
dragArea.style.overflow = "hidden";

document.body.appendChild(dragArea);

console.log("Drag Area Created");

// ================= CREATE DRAGGABLE BOX =================

const dragBox = document.createElement("div");

dragBox.style.width = "120px";
dragBox.style.height = "120px";
dragBox.style.backgroundColor = "orange";
dragBox.style.position = "absolute";
dragBox.style.left = "50px";
dragBox.style.top = "50px";
dragBox.style.cursor = "grab";
dragBox.style.display = "flex";
dragBox.style.alignItems = "center";
dragBox.style.justifyContent = "center";
dragBox.style.fontWeight = "bold";
dragBox.style.color = "black";

dragBox.textContent = "DRAG ME";

dragArea.appendChild(dragBox);

console.log("Draggable Box Created");

// ================= DRAG VARIABLES =================

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// ================= MOUSE DOWN EVENT =================

dragBox.addEventListener("mousedown", function (event) {

    isDragging = true;

    // Calculate mouse offset
    offsetX = event.clientX - dragBox.offsetLeft;
    offsetY = event.clientY - dragBox.offsetTop;

    dragBox.style.cursor = "grabbing";

    console.log("Dragging Started");

});

// ================= MOUSE MOVE EVENT =================

document.addEventListener("mousemove", function (event) {

    if (isDragging) {

        // Calculate new position
        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;

        // Keep inside drag area
        const maxX = dragArea.clientWidth - dragBox.offsetWidth;
        const maxY = dragArea.clientHeight - dragBox.offsetHeight;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        // Update position
        dragBox.style.left = x + "px";
        dragBox.style.top = y + "px";

        console.log("Box Position:", "X =", x, "Y =", y);
    }

});

// ================= MOUSE UP EVENT =================

document.addEventListener("mouseup", function () {

    if (isDragging) {

        isDragging = false;

        dragBox.style.cursor = "grab";

        console.log("Dragging Stopped");
    }

});

console.log("=".repeat(60));
console.log("Drag and Drop Implementation Executed Successfully!");