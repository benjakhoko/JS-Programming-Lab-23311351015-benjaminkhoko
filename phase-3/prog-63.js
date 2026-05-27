// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [63] - { Dynamic Positioning - Absolute and Relative }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= DYNAMIC POSITIONING =================

// Create Relative Container
const relativeBox = document.createElement("div");

relativeBox.style.position = "relative";
relativeBox.style.width = "400px";
relativeBox.style.height = "250px";
relativeBox.style.border = "3px solid black";
relativeBox.style.margin = "20px";
relativeBox.style.backgroundColor = "#f0f0f0";

document.body.appendChild(relativeBox);

console.log("Relative Container Created");

// Create Absolute Positioned Box
const absoluteBox = document.createElement("div");

absoluteBox.style.position = "absolute";
absoluteBox.style.top = "50px";
absoluteBox.style.left = "100px";
absoluteBox.style.width = "150px";
absoluteBox.style.height = "100px";
absoluteBox.style.backgroundColor = "skyblue";
absoluteBox.style.color = "black";
absoluteBox.style.display = "flex";
absoluteBox.style.alignItems = "center";
absoluteBox.style.justifyContent = "center";
absoluteBox.style.fontWeight = "bold";

absoluteBox.textContent = "Absolute Box";

relativeBox.appendChild(absoluteBox);

console.log("Absolute Positioned Box Added");
console.log("Top Position:", absoluteBox.style.top);
console.log("Left Position:", absoluteBox.style.left);

// ================= BUTTON FOR MOVEMENT =================

const moveButton = document.createElement("button");
moveButton.textContent = "Move Box";
moveButton.style.margin = "20px";

document.body.appendChild(moveButton);

// Variables for movement
let topPosition = 50;
let leftPosition = 100;

// Button Click Event
moveButton.addEventListener("click", function () {

    topPosition += 20;
    leftPosition += 20;

    absoluteBox.style.top = topPosition + "px";
    absoluteBox.style.left = leftPosition + "px";

    console.log("Box Moved");
    console.log("New Top Position:", absoluteBox.style.top);
    console.log("New Left Position:", absoluteBox.style.left);
});

// ================= EXTRA POSITIONING EXAMPLES =================

// Create another relative element
const secondRelative = document.createElement("div");

secondRelative.style.position = "relative";
secondRelative.style.width = "300px";
secondRelative.style.height = "150px";
secondRelative.style.border = "2px dashed blue";
secondRelative.style.margin = "20px";

document.body.appendChild(secondRelative);

console.log("Second Relative Container Created");

// Create another absolute element
const secondAbsolute = document.createElement("div");

secondAbsolute.style.position = "absolute";
secondAbsolute.style.bottom = "10px";
secondAbsolute.style.right = "10px";
secondAbsolute.style.width = "120px";
secondAbsolute.style.height = "50px";
secondAbsolute.style.backgroundColor = "orange";
secondAbsolute.style.display = "flex";
secondAbsolute.style.alignItems = "center";
secondAbsolute.style.justifyContent = "center";

secondAbsolute.textContent = "Bottom Right Box";

secondRelative.appendChild(secondAbsolute);

console.log("Second Absolute Box Positioned");
console.log("Bottom Position:", secondAbsolute.style.bottom);
console.log("Right Position:", secondAbsolute.style.right);

console.log("=".repeat(60));
console.log("Dynamic Positioning Program Executed Successfully!");