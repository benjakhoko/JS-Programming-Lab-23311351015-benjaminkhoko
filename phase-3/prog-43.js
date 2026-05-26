console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [43] - [ARRAY TRANSFORMATION - REDUCE, REDUCERIGHT  ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 43: Array Reduction Methods

const values = [2, 4, 6, 8, 10];

const orders = [
    { category: 'Food', amount: 250 },
    { category: 'Transport', amount: 100 },
    { category: 'Food', amount: 150 },
    { category: 'Shopping', amount: 300 },
    { category: 'Transport', amount: 80 }
];

console.log("=== Basic reduce() Examples ===");

// Calculate total sum
const total = values.reduce((accumulator, currentValue) => {

    return accumulator + currentValue;

}, 0);

console.log("Total Sum:", total);

// Calculate multiplication result
const multiplication = values.reduce((acc, current) => {

    return acc * current;

}, 1);

console.log("Multiplication Result:", multiplication);

console.log("\n=== reduce() Without Initial Value ===");

// Find largest number
const largest = values.reduce((acc, current) => {

    return current > acc ? current : acc;

});

console.log("Largest Value:", largest);

// Find smallest number
const smallest = values.reduce((acc, current) => {

    return current < acc ? current : acc;

});

console.log("Smallest Value:", smallest);

console.log("\n=== reduce() with Objects ===");

// Calculate total expenses
const totalExpense = orders.reduce((acc, order) => {

    return acc + order.amount;

}, 0);

console.log("Total Expense:", totalExpense);

console.log("\n=== Grouping Data with reduce() ===");

const groupedOrders = orders.reduce((acc, order) => {

    if (!acc[order.category]) {

        acc[order.category] = [];
    }

    acc[order.category].push(order.amount);

    return acc;

}, {});

console.log("Orders Grouped by Category:", groupedOrders);

console.log("\n=== Counting Items with reduce() ===");

const fruits = [
    'mango',
    'apple',
    'mango',
    'banana',
    'apple',
    'mango'
];

const fruitCounter = fruits.reduce((acc, fruit) => {

    acc[fruit] = (acc[fruit] || 0) + 1;

    return acc;

}, {});

console.log("Fruit Count:", fruitCounter);

console.log("\n=== Flattening Arrays with reduce() ===");

const nestedArrays = [
    [10, 20],
    [30, 40],
    [50, 60]
];

const flatArray = nestedArrays.reduce((acc, current) => {

    return acc.concat(current);

}, []);

console.log("Flattened Array:", flatArray);

console.log("\n=== reduceRight() Example ===");

const greetings = ['Morning', 'Good'];

const fullGreeting = greetings.reduceRight((acc, word) => {

    return acc + ' ' + word;

});

console.log("reduceRight Output:", fullGreeting);

console.log("\n=== Complex reduce() Example: Function Pipeline ===");

const operations = [

    (x) => x + 5,

    (x) => x * 3,

    (x) => x - 4,

    (x) => x / 2
];

const finalResult = operations.reduce((value, operation) => {

    return operation(value);

}, 10);

console.log("Pipeline Result:", finalResult);

console.log("\n=== Average Calculation with reduce() ===");

const marks = [75, 80, 95, 60, 88];

const average =
    marks.reduce((sum, mark) => sum + mark, 0)
    / marks.length;

console.log("Average Marks:", average);

console.log("\n=== Building an Object with reduce() ===");

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Peter' }
];

const userObject = users.reduce((acc, user) => {

    acc[user.id] = user.name;

    return acc;

}, {});

console.log("User Object:", userObject);