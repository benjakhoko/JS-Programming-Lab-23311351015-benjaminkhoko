console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [45] - [ARRAY MODIFICATION - PUSH, POP, SHIFT, UNSHIFT, SPLICE  ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 45: Array Modification Methods Example

let animals = ['cat', 'dog', 'rabbit'];
console.log("Initial array:", animals);

console.log("\n=== push() : Add items at the end ===");
let totalItems = animals.push('lion', 'tiger');
console.log("Updated array:", animals);
console.log("New length returned:", totalItems);

console.log("\n=== pop() : Remove last item ===");
let lastAnimal = animals.pop();
console.log("Array after pop():", animals);
console.log("Removed item:", lastAnimal);

console.log("\n=== unshift() : Add items at the beginning ===");
let startCount = animals.unshift('elephant', 'zebra');
console.log("Updated array:", animals);
console.log("New length:", startCount);

console.log("\n=== shift() : Remove first item ===");
let firstAnimal = animals.shift();
console.log("Array after shift():", animals);
console.log("Removed first item:", firstAnimal);

console.log("\n=== splice() : Insert, Remove, Replace ===");

let cities = ['Paris', 'London', 'Tokyo', 'Berlin', 'Rome'];
console.log("Cities array:", cities);

// Removing elements
let deletedCities = cities.splice(2, 2);
console.log("\nAfter removing 2 cities from index 2:");
console.log("Modified array:", cities);
console.log("Deleted cities:", deletedCities);

// Inserting elements
cities = ['Paris', 'London', 'Tokyo'];
console.log("\nBefore inserting:", cities);

cities.splice(1, 0, 'Dubai', 'Sydney');
console.log("After insertion:", cities);

// Replacing elements
cities = ['Paris', 'London', 'Tokyo'];
console.log("\nBefore replacement:", cities);

let oldCity = cities.splice(1, 1, 'Moscow', 'Beijing');
console.log("After replacement:", cities);
console.log("Replaced city:", oldCity);

console.log("\n=== splice() with negative position ===");

let grades = ['A', 'B', 'C', 'D', 'E'];
console.log("Original grades:", grades);

let removedGrade = grades.splice(-3, 1);
console.log("After splice(-3,1):", grades);
console.log("Removed grade:", removedGrade);

console.log("\n=== fill() : Fill array with values ===");

let marks = [10, 20, 30, 40, 50];
console.log("Original marks:", marks);

marks.fill(5);
console.log("After fill(5):", marks);

marks = [10, 20, 30, 40, 50];
marks.fill(7, 1, 4);
console.log("After fill(7,1,4):", marks);

console.log("\n=== copyWithin() : Copy elements inside array ===");

let values = [11, 22, 33, 44, 55];
console.log("Original values:", values);

values.copyWithin(0, 2);
console.log("After copyWithin(0,2):", values);

values = [11, 22, 33, 44, 55];
values.copyWithin(2, 0, 2);
console.log("After copyWithin(2,0,2):", values);

console.log("\n=== Stack Example (LIFO) ===");

let browserTabs = [];

browserTabs.push('Home');
browserTabs.push('About');
browserTabs.push('Contact');

console.log("Tabs opened:", browserTabs);

console.log("Closed tab:", browserTabs.pop());
console.log("Closed tab:", browserTabs.pop());

console.log("Remaining tabs:", browserTabs);

console.log("\n=== Queue Example (FIFO) ===");

let customers = [];

customers.push('Customer1');
customers.push('Customer2');
customers.push('Customer3');

console.log("Customer queue:", customers);

console.log("Served:", customers.shift());
console.log("Served:", customers.shift());

console.log("Remaining customers:", customers);