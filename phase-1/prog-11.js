console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [11] -[IF-ELSE STATEMENT]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 11: Conditional execution with if-else 
let score = parseInt(prompt("Enter your test score (0-100):")); 
if (score >= 90) { 
console.log("Grade: A+ - Excellent!"); 
} else if (score >= 80) { 
console.log("Grade: A - Excellent!"); 
} else if (score >= 70) { 
console.log("Grade: B-very Good!"); 
} else if (score >= 60) { 
console.log("Grade: c - Good"); 
}else if (score >= 50) {
    console.log("Grade: D - pass!")
} else { 
console.log("Grade: F - Needs Improvement."); 
} 
 
console.log(`Your score: ${score}`); 