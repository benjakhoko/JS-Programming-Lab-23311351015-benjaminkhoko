console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [52] - [DOM CONTENT MANIPULATION - TEXTCONTENT, INNERHTML ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
// Program 52: Selecting DOM elements 
// Note: This program expects to run in a browser with HTML elements 
// Wait for DOM to load 
document.addEventListener('DOMContentLoaded', function() { 
console.log("--- getElementById ---"); 
const header = document.getElementById('main-header'); 
if (header) { 
console.log("Found header:", header); 
console.log("Header text:", header.textContent); 
} 
console.log("\n--- getElementsByClassName ---"); 
 
const items = document.getElementsByClassName('item'); 
console.log("Items (HTMLCollection):", items); 
console.log("Number of items:", items.length); 
// HTMLCollection is live! 
for (let i = 0; i < items.length; i++) { 
console.log(`Item ${i}:`, items[i].textContent); 
} 
console.log("\n--- getElementsByTagName ---"); 
const paragraphs = document.getElementsByTagName('p'); 
console.log("Paragraphs:", paragraphs); 
console.log("First paragraph:", paragraphs[0]?.textContent); 
console.log("\n--- querySelector ---"); 
const firstItem = document.querySelector('.item'); 
console.log("First .item:", firstItem?.textContent); 
const nestedElement = document.querySelector('.container .nested'); 
console.log("Nested element:", nestedElement?.textContent);
});