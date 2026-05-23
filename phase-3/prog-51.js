console.log("STUDENT: Benjamin Khoko");
console.log("ID: 23311351015");
console.log("PROGRAM: 51 - DOM SELECTION METHODS - GETELEMENTBYID, QUERYSELECTOR");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log(
    "VERIFICATION HASH: " +
    btoa("23311351015" + Date.now()).substring(0, 12)
);
console.log("=".repeat(55));

// Program 51: Selecting DOM elements
// Note: This program expects to run in a browser with HTML elements

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    console.log("--- getElementById ---");

    const header = document.getElementById('main-header');

    if (header) {
        console.log("Found header:", header);
        console.log("Header text:", header.textContent);
    } else {
        console.log("Header not found");
    }

    console.log("\n--- getElementsByClassName ---");

    const items = document.getElementsByClassName('item');

    console.log("Items (HTMLCollection):", items);
    console.log("Number of items:", items.length);

    // HTMLCollection is live
    for (let i = 0; i < items.length; i++) {
        console.log(`Item ${i + 1}:`, items[i].textContent);
    }

    console.log("\n--- getElementsByTagName ---");

    const paragraphs = document.getElementsByTagName('p');

    console.log("Paragraphs:", paragraphs);

    if (paragraphs.length > 0) {
        console.log("First paragraph:", paragraphs[0].textContent);
    }

    console.log("\n--- querySelector ---");

    const firstItem = document.querySelector('.item');
    console.log("First .item:", firstItem ? firstItem.textContent : "Not found");

    const nestedElement = document.querySelector('.container .nested');
    console.log(
        "Nested element:",
        nestedElement ? nestedElement.textContent : "Not found"
    );

});