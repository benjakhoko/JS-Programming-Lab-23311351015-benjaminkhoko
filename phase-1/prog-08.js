console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [08] -[LOGICAL OPERATORS ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 8: AND, OR, NOT operators 
let isLoggedIn = true; 
let isAdmin = false; 
let hasPermission = true; 
// AND (&&) - Both must be true 
// true 
console.log("Admin access:", isLoggedIn && isAdmin); // false 
// OR (||) - At least one must be true 
console.log("Can view page:", isLoggedIn || hasPermission); // true
// NOT (!) - Inverts boolean 
console.log("Is NOT admin:", !isAdmin); // true 
// Short-circuit evaluation 
let userName = "benjamin khoko"; 
let displayName = userName || "russell khoko"; 
console.log("Display name:", displayName); // "Guest User" 
// Nullish coalescing (??) - Only checks null/undefined 
let count = 0; 
let result = count ?? 10; 
console.log("Nullish result:", result); // 0 (not 10, because 0 is not null/undefined) 