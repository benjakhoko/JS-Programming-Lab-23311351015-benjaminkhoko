console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [32] - [OBJECT METHODS AND 'THIS' KEYWORD]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 32: Understanding 'this' in object methods
const user = { 
    name: "benjamin khoko", 
    age: 28, 
     
    // Regular method - 'this' refers to the object 
    greet() { 
        console.log(`Hello, I'm ${this.name}`); 
    }, 
     
    // Arrow function - 'this' is NOT the object (bad practice here)
    greetArrow: () => { 
        console.log(`Hello, I'm ${this.name}`); // undefined
    }, 
     
    // Method that returns a function (loses 'this')
    getGreeter() { 
        return function() { 
            console.log(`Hello, I'm ${this.name}`); // undefined
        }; 
    }, 
     
    // Fixed version using arrow function (inherits 'this')
    getGreeterFixed() {
        return () => {
            console.log(`Hello, I'm ${this.name}`);
        };
    }
};

// Testing
user.greet();              // ✅ Works
user.greetArrow();         // ❌ Undefined

const greeter = user.getGreeter();
greeter();                 // ❌ Undefined

const fixedGreeter = user.getGreeterFixed();
fixedGreeter();            // ✅ Works
