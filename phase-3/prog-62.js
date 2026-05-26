// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [62] - { Advanced DOM 2 Event Handling }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= ADVANCED DOM 2 EVENT HANDLING =================

// Create button dynamically
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Create input field dynamically
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type something here...";
document.body.appendChild(input);

// Create output paragraph
const output = document.createElement("p");
document.body.appendChild(output);

// ---------------- CLICK EVENT ----------------
button.addEventListener("click", function () {
    console.log("Button was clicked!");
    output.textContent = "Button Click Event Triggered";
});

// ---------------- DOUBLE CLICK EVENT ----------------
button.addEventListener("dblclick", function () {
    console.log("Button was double-clicked!");
    output.textContent = "Double Click Event Triggered";
});

// ---------------- MOUSE OVER EVENT ----------------
button.addEventListener("mouseover", function () {
    console.log("Mouse entered button area");
    button.style.backgroundColor = "lightblue";
});

// ---------------- MOUSE OUT EVENT ----------------
button.addEventListener("mouseout", function () {
    console.log("Mouse left button area");
    button.style.backgroundColor = "";
});

// ---------------- KEYUP EVENT ----------------
input.addEventListener("keyup", function (event) {
    console.log("Key Pressed:", event.key);
    output.textContent = "You typed: " + input.value;
});

// ---------------- FOCUS EVENT ----------------
input.addEventListener("focus", function () {
    console.log("Input field focused");
    input.style.border = "2px solid green";
});

// ---------------- BLUR EVENT ----------------
input.addEventListener("blur", function () {
    console.log("Input field lost focus");
    input.style.border = "";
});

// ---------------- EVENT PROPAGATION EXAMPLE ----------------

// Parent Div
const parentDiv = document.createElement("div");
parentDiv.style.padding = "20px";
parentDiv.style.backgroundColor = "#ddd";
parentDiv.textContent = "Parent Div";
document.body.appendChild(parentDiv);

// Child Button
const childButton = document.createElement("button");
childButton.textContent = "Child Button";
parentDiv.appendChild(childButton);

// Parent Event
parentDiv.addEventListener("click", function () {
    console.log("Parent DIV Clicked");
});

// Child Event
childButton.addEventListener("click", function (event) {
    console.log("Child Button Clicked");

    // Stop event bubbling
    event.stopPropagation();
});

console.log("=".repeat(60));
console.log("Advanced DOM 2 Event Handling Executed Successfully!");