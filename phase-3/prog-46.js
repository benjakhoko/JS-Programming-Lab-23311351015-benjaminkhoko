console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [46] - [ARRAY SORTING AND REVERSING ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55)); 
// Program 46: Sorting Arrays with Different Comparators

console.log("=== Default Sorting (Alphabetical Order) ===");

let fruits = ['mango', 'apple', 'banana', 'grape'];
console.log("Original array:", fruits);

console.log("Sorted array:", fruits.sort());
console.log("Original array changed:", fruits);

console.log("\n=== Numeric Sorting with Compare Function ===");

let scores = [45, 12, 89, 23, 5, 100, 67];
console.log("Original scores:", scores);

// Ascending order
let lowToHigh = [...scores].sort((a, b) => a - b);
console.log("Ascending order:", lowToHigh);

// Descending order
let highToLow = [...scores].sort((a, b) => b - a);
console.log("Descending order:", highToLow);

console.log("\n=== Sorting Objects ===");

const employees = [
    { name: 'John', salary: 50000, age: 30 },
    { name: 'Sarah', salary: 75000, age: 28 },
    { name: 'Mike', salary: 45000, age: 35 },
    { name: 'Emma', salary: 82000, age: 26 },
    { name: 'Daniel', salary: 60000, age: 30 }
];

// Sort by salary
const bySalary = [...employees].sort((a, b) => a.salary - b.salary);

console.log("Sorted by salary:");
console.log(bySalary.map(emp => `${emp.name}: ${emp.salary}`));

// Sort by name
const byEmployeeName = [...employees].sort((a, b) =>
    a.name.localeCompare(b.name)
);

console.log("\nSorted by name:");
console.log(byEmployeeName.map(emp => emp.name));

// Sort by age descending, then salary descending
const byAgeAndSalary = [...employees].sort((a, b) => {
    if (a.age !== b.age) {
        return b.age - a.age;
    }

    return b.salary - a.salary;
});

console.log("\nSorted by age descending then salary descending:");
console.log(
    byAgeAndSalary.map(emp =>
        `${emp.name} (${emp.age}, ${emp.salary})`
    )
);

console.log("\n=== reverse() Method ===");

let digits = [1, 2, 3, 4, 5];
console.log("Original digits:", digits);

digits.reverse();

console.log("After reverse():", digits);

console.log("\n=== toSorted() and toReversed() Methods ===");

if (typeof Array.prototype.toSorted === 'function') {

    let values = [9, 4, 7, 1, 6];

    let sortedValues = values.toSorted((a, b) => a - b);

    console.log("Original array remains unchanged:", values);
    console.log("New sorted array:", sortedValues);

    let reversedValues = values.toReversed();

    console.log("New reversed array:", reversedValues);
}

console.log("\n=== Complex Sorting Example ===");

const projects = [
    { title: 'Project A', status: 'urgent', finished: false },
    { title: 'Project B', status: 'low', finished: true },
    { title: 'Project C', status: 'medium', finished: false },
    { title: 'Project D', status: 'urgent', finished: true },
    { title: 'Project E', status: 'low', finished: false }
];

const statusOrder = {
    urgent: 1,
    medium: 2,
    low: 3
};

const arrangedProjects = [...projects].sort((a, b) => {

    // Unfinished projects first
    if (a.finished !== b.finished) {
        return a.finished ? 1 : -1;
    }

    // Then sort by status priority
    return statusOrder[a.status] - statusOrder[b.status];
});

console.log("Projects sorted by completion and priority:");

arrangedProjects.forEach(project => {
    console.log(
        `${project.finished ? '✔' : '○'} ${project.title} (${project.status})`
    );
});

console.log("\n=== Stable Sorting Example ===");

const products = [
    { type: 'Electronics', price: 500 },
    { type: 'Furniture', price: 800 },
    { type: 'Electronics', price: 1200 },
    { type: 'Furniture', price: 1500 }
];

const sortedProducts = [...products].sort((a, b) =>
    a.type.localeCompare(b.type)
);

console.log("Sorted by product type:");
console.log(sortedProducts);