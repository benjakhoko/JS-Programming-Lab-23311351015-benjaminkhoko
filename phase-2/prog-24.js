console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [24] - [PARAMETERS AND DEFAULT VALUES ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 24: Function parameters and default values 
// Default parameters (ES6+) 
function greet(name = "Guest", greeting = "Hello") { 
console.log(`${greeting}, ${name}!`); 
} 
greet();                           
// Hello, Guest! 
greet("gamu");                   
greet("russell", "Hi");              
// Hello, Alice! 
// Hi, Bob! 
greet(undefined, "Welcome");     
// Rest parameters (...) 
function sum(...numbers) { 
let total = 0; 
for (let num of numbers) { 
total += num; 
} 
return total; 
} 
// Welcome, Guest! 
console.log("Sum of 1,2,3:", sum(1, 2, 3)); 
console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5)); 
// Arguments object (older way) 
function oldStyleSum() { 
let total = 0; 
for (let i = 0; i < arguments.length; i++) { 
total += arguments[i]; 
} 
return total; 
} 
 
console.log("Old style sum:", oldStyleSum(1, 2, 3, 4));