console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [09] -[TYPE COERCION AND CONVERSION ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 9: Understanding automatic and manual type conversion 
// Implicit Coercion (Automatic) 
console.log("5" + 3);        
console.log("5" - 3);        
console.log("5" * "2");      
// "53" (string concatenation) 
// 2 (numeric subtraction) 
// 10 (numeric multiplication) 
console.log(true + true);    // 2 (true is 1, false is 0) 
// Explicit Conversion (Manual) 
let strNumber = "127.45"; 
let intNumber = parseInt(strNumber); 
let floatNumber = parseFloat(strNumber);
let numberConverted = Number(strNumber); 
console.log("parseInt:", intNumber);           
console.log("parseFloat:", floatNumber);       
// 123 
// 123.45 
console.log("Number():", numberConverted);     
// Converting to String 
let num = 457; 
// 123.45 
console.log("toString():", num.toString());    // "456" 
console.log("String():", String(num));         
// Converting to Boolean 
console.log("Boolean(1):", Boolean(1));        
console.log("Boolean(0):", Boolean(0));        
console.log("Boolean(''):", Boolean(""));      
// "456" 
// true 
// false 
// false 
console.log("Boolean('hello'):", Boolean("hello")); // true 