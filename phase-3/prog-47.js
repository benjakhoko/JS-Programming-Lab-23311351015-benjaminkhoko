console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [47] - [MULTIDIMENSIONAL ARRAYS ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 47: Working with 2D and 3D Arrays

console.log("=== Creating a 2D Array ===");

const table = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33]
];

console.log("2D Array:");
table.forEach(row => console.log(row));

console.log("\n=== Accessing Elements ===");

console.log("table[0][1]:", table[0][1]);
console.log("table[1][0]:", table[1][0]);
console.log("table[2][2]:", table[2][2]);

console.log("\n=== Iterating Through a 2D Array ===");

for (let row = 0; row < table.length; row++) {

    for (let col = 0; col < table[row].length; col++) {

        console.log(`table[${row}][${col}] = ${table[row][col]}`);
    }
}

console.log("\n=== Creating a Dynamic 2D Array ===");

function build2DArray(rows, columns, value = 0) {

    return Array.from(
        { length: rows },
        () => Array.from({ length: columns }, () => value)
    );
}

const screen = build2DArray(4, 5, '*');

console.log("4 x 5 Array:");

screen.forEach(row => console.log(row.join(' ')));

console.log("\n=== Simple Game Board Example ===");

let gameBoard = build2DArray(3, 3, '-');

gameBoard[0][1] = 'A';
gameBoard[1][1] = 'B';
gameBoard[2][0] = 'A';

console.log("Game Board:");

console.log(' ' + gameBoard[0].join(' | '));
console.log('---+---+---');
console.log(' ' + gameBoard[1].join(' | '));
console.log('---+---+---');
console.log(' ' + gameBoard[2].join(' | '));

console.log("\n=== Matrix Transpose Operation ===");

function transposeArray(arr) {

    return arr[0].map((_, index) =>
        arr.map(row => row[index])
    );
}

console.log("Original Table:");

table.forEach(row => console.log(row));

console.log("\nTransposed Table:");

const swapped = transposeArray(table);

swapped.forEach(row => console.log(row));

console.log("\n=== 3D Array Example ===");

const box = [

    [ // Layer 1
        [10, 20],
        [30, 40]
    ],

    [ // Layer 2
        [50, 60],
        [70, 80]
    ]
];

console.log("3D Array Values:");

console.log("box[0][0][1]:", box[0][0][1]);
console.log("box[1][1][0]:", box[1][1][0]);

console.log("\n=== Student Report Example ===");

const report = [
    ['Name', 'Science', 'Math', 'History', 'Average'],
    ['James', 80, 90, 85],
    ['Linda', 75, 88, 92],
    ['Peter', 95, 84, 89],
    ['Sophia', 90, 91, 87]
];

// Calculate averages
for (let i = 1; i < report.length; i++) {

    const marks = report[i].slice(1);

    const average =
        marks.reduce((total, value) => total + value, 0)
        / marks.length;

    report[i].push(average.toFixed(1));
}

console.log("\nStudent Report:");

report.forEach(row => {

    console.log(
        row.map(item =>
            item.toString().padStart(10, ' ')
        ).join('')
    );
});

console.log("\n=== Flattening Nested Arrays ===");

const nestedNumbers = [
    [1, 2],
    [3, 4, [5, 6]],
    [7, 8]
];

console.log("Original Nested Array:", nestedNumbers);

console.log("flat():", nestedNumbers.flat());

console.log("flat(2):", nestedNumbers.flat(2));

console.log("flat(Infinity):", nestedNumbers.flat(Infinity));