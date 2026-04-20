console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [07] -[Understanding comparison operators]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));

// Program 7: Understanding comparison operators 
let x = 5; 
let y = "5";
let z = 10; 

console.log("Equal (==):", x == y);          
// true (loose equality) 
console.log("Strict Equal (===):", x === y); // false (strict equality) 
console.log("Not Equal (!=):", x != y);      
// false 
console.log("Strict Not Equal (!==):", x !== y); // true 
console.log("Greater than:", z > x);         
console.log("Less than:", x < z);            
// true 
// true 
console.log("Greater or equal:", x >= 5);    // true 
console.log("Less or equal:", z <= 10); //true