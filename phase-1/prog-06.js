console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [06] -[ARITHMETIC OPERATIONS ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 6: Basic arithmetic operations 
let a = 17; 
let b = 4; 
console.log("Addition:", a + b);        
console.log("Subtraction:", a - b);     
// 19 
// 11 
console.log("Multiplication:", a * b);  // 60 
console.log("Division:", a / b);        
// 3.75 
console.log("Modulus (Remainder):", a % b); // 3 
console.log("Exponentiation:", a ** b); // 50625 (15^4) 
// Increment and Decrement 
let counter = 10; 
console.log("Original:", counter);      
// 10 
console.log("Post-increment:", counter++); // 10 (returns then increments) 
console.log("After post-increment:", counter); // 11 
console.log("Pre-increment:", ++counter); // 12 (increments then returns) 
console.log("Post-decrement:", counter--); // 12 
console.log("After post-decrement:", counter); // 11 