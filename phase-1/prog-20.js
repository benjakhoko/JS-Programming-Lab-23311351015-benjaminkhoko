console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [20] - [CUSTOM ERROR TYPES] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 20: Creating and using custom errors 
 
class ValidationError extends Error { 
    constructor(message, field) { 
        super(message); 
        this.name = "ValidationError"; 
        this.field = field; 
    } 
} 
 
class AgeError extends ValidationError { 
    constructor(message, age) { 
        super(message, "age"); 
        this.age = age; 
    } 
} 
 
function validateUser(name, age) { 
    try { 
        if (!name || name.trim() === "") { 
            throw new ValidationError("Name cannot be empty", "name"); 
        } 
         
        if (typeof age !== "number" || isNaN(age)) { 
            throw new ValidationError("Age must be a number", "age"); 
        } 
         
        if (age < 0) { 
            throw new AgeError("Age cannot be negative", age); 
        } 
         
        if (age > 18) { 
            throw new AgeError("User must be 18 or older", age); 
        } 
         
        console.log(`User ${name} (${age}) is valid.`); 
        return true; 
    } catch (error) { 
        if (error instanceof AgeError) { 
            console.log(`Age Error (${error.age}): ${error.message}`); 
        } else if (error instanceof ValidationError) { 
            console.log(`Validation Error (${error.field}): ${error.message}`); 
        } else { 
            console.log("Unknown Error:", error.message); 
        } 
        return false; 
    } 
} 
 
// Test the validation 
console.log("\nTesting User Validation:"); 
validateUser("Johh nathiko", 5);     // Valid 
validateUser(" alinafe", 25);             // Name error 
validateUser("benjamin", -5);         // Age error 
validateUser("khoko", 15);          // Age error 
validateUser("ben", "twenty");  // Type error 