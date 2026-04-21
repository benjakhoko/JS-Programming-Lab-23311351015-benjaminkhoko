console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [10] -[USER INPUT WITH PROMPT()  ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 10: Getting input from user via prompt dialog 
let userName = prompt("Please enter your name:"); 
let userAge = prompt("Please enter your age:"); 
// Convert age string to number 
let ageNumber = parseInt(userAge); 
// Calculate birth year 
let currentYear = 2026; 
let birthYear = currentYear - ageNumber; 
// Display output using alert 
alert(`Hello ${userName}! You were born around ${birthYear}.`); 
// Also log to console 
console.log(`User: ${userName}, Age: ${ageNumber}, Birth Year: 
${birthYear}`); 