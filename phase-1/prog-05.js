console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [05] - [STRING OPERATIONS AND CONCATENATION ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 5: Working with strings 
let firstName = "benjamin"; 
let lastName = "khoko"; 
let age = 20; 
// Method 1: Concatenation with + 
let fullName1 = firstName + " " + lastName; 
console.log("Concatenation:", fullName1); 
// Method 2: Template Literals (ES6+) - Preferred 
let fullName2 = `${firstName} ${lastName} is ${age} years old`; 
console.log("Template Literal:", fullName2); 
// String methods 
let text = "chikwawa"; 
console.log("Length:", text.length);                    
console.log("Uppercase:", text.toUpperCase());          
console.log("Lowercase:", text.toLowerCase());          
console.log("Substring:", text.substring(0, 10));       
// 22 
// JAVASCRIPT 
// javascript 
// JavaScript 
console.log("Includes 'Script':", text.includes("Script")); // true 
console.log("Character at index 5:", text.charAt(5));   // c 
