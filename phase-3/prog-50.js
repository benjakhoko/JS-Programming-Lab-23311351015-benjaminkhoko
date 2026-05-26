console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [50] - [ ARRAY-LIKE OBJECTS AND CONVERSION] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55))
// Program 50: Working with Array-Like Objects

console.log("=== Understanding Array-Like Objects ===");

// Creating an array-like object
const pseudoArray = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
};

console.log("Array-like object:", pseudoArray);

console.log("Is it a real array?", Array.isArray(pseudoArray));

console.log("Length property:", pseudoArray.length);

console.log("Access element by index:", pseudoArray[1]);

console.log("\n=== Common Examples of Array-Like Objects ===");

// Using the arguments object
function showArguments() {

    console.log("Arguments object:", arguments);

    console.log("Number of arguments:", arguments.length);

    console.log("First argument:", arguments[0]);

    console.log("Is array?", Array.isArray(arguments));
}

showArguments('JavaScript', 'HTML', 'CSS');

// String behaves like array-like
const word = "Coding";

console.log("\nString as array-like object:");

console.log("word.length:", word.length);

console.log("word[2]:", word[2]);

console.log("Is string an array?", Array.isArray(word));

console.log("\n=== Converting Array-Like Objects into Arrays ===");

const fakeArray = {
    0: 'A',
    1: 'B',
    2: 'C',
    length: 3
};

// Method 1: Array.from()
const converted1 = Array.from(fakeArray);

console.log("Using Array.from():", converted1);

// Method 2: slice.call()
const converted2 = Array.prototype.slice.call(fakeArray);

console.log("Using slice.call():", converted2);

// Method 3: Convert string into array
const letters = Array.from("WORLD");

console.log("String converted to array:", letters);

console.log("\n=== Borrowing Array Methods ===");

const scores = {
    0: 15,
    1: 25,
    2: 35,
    length: 3
};

// Using forEach()
Array.prototype.forEach.call(scores, (value, index) => {

    console.log(`scores[${index}] = ${value}`);
});

// Using map()
const multiplied = Array.prototype.map.call(scores, num => num * 3);

console.log("Values multiplied by 3:", multiplied);

// Using filter()
const greaterThan20 =
    Array.prototype.filter.call(scores, num => num > 20);

console.log("Values greater than 20:", greaterThan20);

console.log("\n=== Simulating an HTML Collection ===");

function simulateCollection() {

    const paragraphs = {
        0: {
            tagName: 'P',
            className: 'intro',
            textContent: 'Welcome Paragraph'
        },

        1: {
            tagName: 'P',
            className: 'content',
            textContent: 'Main Content'
        },

        2: {
            tagName: 'P',
            className: 'content',
            textContent: 'Extra Information'
        },

        length: 3
    };

    // Convert to array
    const paragraphArray = Array.from(paragraphs);

    // Filter by class name
    const contentParagraphs =
        paragraphArray.filter(p => p.className === 'content');

    console.log("Paragraphs with class 'content':");

    console.log(contentParagraphs);

    // Loop directly using borrowed methods
    Array.prototype.forEach.call(paragraphs, (p, index) => {

        console.log(
            `${index}: ${p.tagName}.${p.className} - "${p.textContent}"`
        );
    });
}

simulateCollection();

console.log("\n=== Creating a Custom Iterable Object ===");

const fruitCollection = {

    items: ['Mango', 'Orange', 'Pineapple'],

    length: 3,

    // Iterator
    [Symbol.iterator]: function () {

        let position = 0;

        const data = this.items;

        return {

            next: function () {

                if (position < data.length) {

                    return {
                        value: data[position++],
                        done: false
                    };
                }

                return { done: true };
            }
        };
    }
};

console.log("Spread operator works:", [...fruitCollection]);

console.log("Using for...of loop:");

for (const fruit of fruitCollection) {

    console.log(`Fruit: ${fruit}`);
}

console.log("\n=== Function Accepting Arrays or Array-Like Objects ===");

function analyzeCollection(collection) {

    const values =
        Array.isArray(collection)
            ? collection
            : Array.from(collection);

    return {

        totalItems: values.length,

        firstItem: values[0],

        lastItem: values[values.length - 1],

        allItems: values
    };
}

console.log(
    "Analyze real array:",
    analyzeCollection([10, 20, 30])
);

console.log(
    "Analyze array-like object:",
    analyzeCollection({
        0: 'X',
        1: 'Y',
        length: 2
    })
);

console.log(
    "Analyze string:",
    analyzeCollection("JS")
);
