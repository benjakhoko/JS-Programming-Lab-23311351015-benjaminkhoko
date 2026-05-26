console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [41] - [ARRAY CREATION AND BASIC METHODS  ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 41: Creating and Working with Arrays

// Different ways to create arrays

const list1 = [100, 200, 300, 400, 500];       // Array literal
const list2 = new Array(100, 200, 300, 400, 500); // Array constructor
const list3 = Array.from('world');             // From iterable
const list4 = Array.of(10, 20, 30, 40, 50);   // Array.of()

console.log("=== Array Creation Methods ===");

console.log("Using array literal:", list1);
console.log("Using Array constructor:", list2);
console.log("Using Array.from():", list3);
console.log("Using Array.of():", list4);

console.log("\n=== Working with Array Length ===");

const items = ['Pen', 'Book', 'Bag'];

console.log("Original items:", items);
console.log("Current length:", items.length);

// Increasing array length
items.length = 5;

console.log("After increasing length:", items);

// Decreasing array length
items.length = 2;

console.log("After decreasing length:", items);

console.log("\n=== Basic Array Methods ===");

const colors = ['Red', 'Blue', 'Green'];

console.log("Original colors:", colors);

console.log("indexOf('Blue'):", colors.indexOf('Blue'));
console.log("indexOf('Black'):", colors.indexOf('Black'));

console.log("includes('Green'):", colors.includes('Green'));
console.log("includes('White'):", colors.includes('White'));

console.log("\n=== join() Method ===");

console.log("join():", colors.join());
console.log("join(' - '):", colors.join(' - '));
console.log("join(''):", colors.join(''));

console.log("\n=== concat() Method ===");

const extraColors = ['Yellow', 'Purple'];

const combinedColors = colors.concat(extraColors);

console.log("Combined arrays:", combinedColors);

console.log(
    "Multiple concat():",
    colors.concat(extraColors, ['Pink', 'Brown'])
);

console.log("\n=== slice() Method ===");

const marks = [5, 10, 15, 20, 25];

console.log("Original marks:", marks);

console.log("slice(1, 4):", marks.slice(1, 4));
console.log("slice(2):", marks.slice(2));
console.log("slice(-2):", marks.slice(-2));
console.log("slice():", marks.slice());

console.log("\n=== Checking Arrays ===");

console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));
console.log("Array.isArray('JavaScript'):", Array.isArray('JavaScript'));