// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [65] - { Element Visibility Control and Toggling }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= ELEMENT VISIBILITY CONTROL =================

// Create Heading
const heading = document.createElement("h2");
heading.textContent = "Element Visibility Control Example";
document.body.appendChild(heading);

// Create Box Element
const box = document.createElement("div");

box.style.width = "300px";
box.style.height = "150px";
box.style.backgroundColor = "skyblue";
box.style.margin = "20px";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.fontSize = "20px";
box.style.fontWeight = "bold";

box.textContent = "VISIBLE ELEMENT";

document.body.appendChild(box);

console.log("Box Element Created");

// ================= SHOW BUTTON =================

const showButton = document.createElement("button");

showButton.textContent = "Show Element";
showButton.style.margin = "10px";

document.body.appendChild(showButton);

// ================= HIDE BUTTON =================

const hideButton = document.createElement("button");

hideButton.textContent = "Hide Element";
hideButton.style.margin = "10px";

document.body.appendChild(hideButton);

// ================= TOGGLE BUTTON =================

const toggleButton = document.createElement("button");

toggleButton.textContent = "Toggle Element";
toggleButton.style.margin = "10px";

document.body.appendChild(toggleButton);



showButton.addEventListener("click", function () {

    box.style.display = "flex";

    console.log("Element Shown");

});



hideButton.addEventListener("click", function () {

    box.style.display = "none";

    console.log("Element Hidden");

});


toggleButton.addEventListener("click", function () {

    if (box.style.display === "none") {

        box.style.display = "flex";

        console.log("Element Toggled: Visible");

    } else {

        box.style.display = "none";

        console.log("Element Toggled: Hidden");

    }

});

console.log("=".repeat(60));
console.log("Element Visibility Control and Toggling Executed Successfully!");