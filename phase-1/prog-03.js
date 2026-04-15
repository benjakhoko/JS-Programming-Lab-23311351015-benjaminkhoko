console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [03] - [VARIABLES WITH VAR, LET, AND CONST]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 3: Variable declarations and scope differences
// var - function scoped (older way)
var oldWay = "I am proggramer with var";
console.log("var variable:", oldWay);
// let - block scoped (modern way)
let modernWay = "I am proggramer with let";
console.log("let variable:", modernWay);
// const - cannot be reassigned (modern way)
const constantValue = "I cannot change";
console.log("const variable:", constantValue);
// Uncommenting below line would cause error:
// constantValue = "New value"; // TypeError: Assignment to constant variable