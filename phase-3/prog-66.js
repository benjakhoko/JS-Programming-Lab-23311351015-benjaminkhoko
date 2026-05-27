// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [66] - { Z-Index and Stacking Elements }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= Z-INDEX AND STACKING ELEMENTS =================

// Create Main Container
const container = document.createElement("div");

container.style.position = "relative";
container.style.width = "500px";
container.style.height = "350px";
container.style.border = "3px solid black";
container.style.margin = "20px";
container.style.backgroundColor = "#f5f5f5";

document.body.appendChild(container);

console.log("Main Container Created");

// ================= FIRST BOX =================

const box1 = document.createElement("div");

box1.style.position = "absolute";
box1.style.width = "200px";
box1.style.height = "200px";
box1.style.backgroundColor = "red";
box1.style.top = "40px";
box1.style.left = "40px";
box1.style.zIndex = "1";
box1.style.display = "flex";
box1.style.alignItems = "center";
box1.style.justifyContent = "center";
box1.style.color = "white";
box1.style.fontWeight = "bold";

box1.textContent = "Z-INDEX 1";

container.appendChild(box1);

console.log("Box 1 Created with Z-Index:", box1.style.zIndex);

// ================= SECOND BOX =================

const box2 = document.createElement("div");

box2.style.position = "absolute";
box2.style.width = "200px";
box2.style.height = "200px";
box2.style.backgroundColor = "blue";
box2.style.top = "90px";
box2.style.left = "90px";
box2.style.zIndex = "2";
box2.style.display = "flex";
box2.style.alignItems = "center";
box2.style.justifyContent = "center";
box2.style.color = "white";
box2.style.fontWeight = "bold";

box2.textContent = "Z-INDEX 2";

container.appendChild(box2);

console.log("Box 2 Created with Z-Index:", box2.style.zIndex);

// ================= THIRD BOX =================

const box3 = document.createElement("div");

box3.style.position = "absolute";
box3.style.width = "200px";
box3.style.height = "200px";
box3.style.backgroundColor = "green";
box3.style.top = "140px";
box3.style.left = "140px";
box3.style.zIndex = "3";
box3.style.display = "flex";
box3.style.alignItems = "center";
box3.style.justifyContent = "center";
box3.style.color = "white";
box3.style.fontWeight = "bold";

box3.textContent = "Z-INDEX 3";

container.appendChild(box3);

console.log("Box 3 Created with Z-Index:", box3.style.zIndex);

// ================= BUTTON TO CHANGE STACKING =================

const changeButton = document.createElement("button");

changeButton.textContent = "Change Z-Index";
changeButton.style.margin = "20px";

document.body.appendChild(changeButton);

// ================= BUTTON EVENT =================

changeButton.addEventListener("click", function () {

    // Change stacking order
    box1.style.zIndex = "5";
    box2.style.zIndex = "1";
    box3.style.zIndex = "2";

    console.log("Z-Index Changed Dynamically");
    console.log("Box 1 New Z-Index:", box1.style.zIndex);
    console.log("Box 2 New Z-Index:", box2.style.zIndex);
    console.log("Box 3 New Z-Index:", box3.style.zIndex);

});

console.log("=".repeat(60));
console.log("Z-Index and Stacking Elements Executed Successfully!");