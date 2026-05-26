console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [58] - [REGULAR EXPRESSIONS - PATTERN MATCHING AND VALIDATION  ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
// Program 58: Regular Expression Examples

console.log("=== Creating Regular Expressions ===");

// Method 1: Literal notation
const pattern1 = /hello/gi;

// Method 2: Constructor
const pattern2 = new RegExp('hello', 'gi');

console.log("Literal RegEx:", pattern1);

console.log("Constructor RegEx:", pattern2);

console.log("\n=== Basic Pattern Matching ===");

// test() method
const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

console.log(
    "Valid username:",
    usernameRegex.test("user_123")
);

console.log(
    "Invalid username:",
    usernameRegex.test("ab")
);

// exec() method
const idRegex = /ID:(\d{4})/;

const idResult = idRegex.exec("Employee ID:5678");

console.log("Matched result:", idResult);

console.log("Extracted ID:", idResult[1]);

console.log("Full match:", idResult[0]);

console.log("\n=== String Methods with RegEx ===");

const sentence =
    "JavaScript makes web development easier";

// match()
const consonants =
    sentence.match(/[bcdfghjklmnpqrstvwxyz]/gi);

console.log("Consonants found:", consonants);

console.log("Total consonants:", consonants.length);

// matchAll()
const records =
    "2026/01/15 2026/02/20 2026/03/25";

const recordPattern =
    /(\d{4})\/(\d{2})\/(\d{2})/g;

const allRecords =
    [...records.matchAll(recordPattern)];

console.log("\nDate Records:");

allRecords.forEach(record => {

    console.log(
        `Year: ${record[1]}, Month: ${record[2]}, Day: ${record[3]}`
    );
});

// replace()
const message =
    "This movie is boring".replace(/boring/, "interesting");

console.log("\nUpdated sentence:", message);

// replace() with callback
const amounts =
    "Laptop: $500.00, Phone: $300.00";

const updatedAmounts =
    amounts.replace(/\$(\d+\.\d{2})/g, (match, amount) => {

        const increased =
            parseFloat(amount) * 1.15;

        return `$${increased.toFixed(2)}`;
    });

console.log("After adding 15%:", updatedAmounts);

// split()
const data =
    "HTML,CSS;JavaScript|React";

const technologies =
    data.split(/[,;|]/);

console.log("\nSplit result:", technologies);

// search()
const searchIndex =
    "Learning JavaScript".search(/javascript/i);

console.log("Found at index:", searchIndex);

console.log("\n=== RegEx Flags ===");

const sample =
    "Dog dog DOG";

console.log("No flags:", sample.match(/dog/));

console.log("i flag:", sample.match(/dog/i));

console.log("g flag:", sample.match(/dog/g));

console.log("gi flag:", sample.match(/dog/gi));

console.log("\n=== Character Classes ===");

// Digits
console.log(
    "Digits:",
    "abc123xyz789".match(/\d+/g)
);

// Word characters
console.log(
    "Words:",
    "hello_world 456!".match(/\w+/g)
);

// Whitespace
console.log(
    "Whitespace count:",
    "a b\tc\nd".match(/\s/g).length
);

// Word boundary
console.log(
    "Word 'car':",
    "The car carried cargo".match(/\bcar\b/g)
);

// Non-digits
console.log(
    "Non-digits:",
    "abc123xyz".match(/\D+/g)
);

console.log("\n=== Quantifiers ===");

console.log("b*:", "bbb".match(/b*/g));

console.log("b+:", "bbb".match(/b+/g));

console.log("b?:", "bbb".match(/b?/g));

console.log(
    "4 digits:",
    "12345678".match(/\d{4}/g)
);

console.log(
    "2-5 digits:",
    "1 12 123 1234 12345".match(/\d{2,5}/g)
);

console.log("\n=== Groups and Capturing ===");

// Capturing groups
const fullNameRegex =
    /(\w+)\s+(\w+)/;

const fullName =
    "Michael Jordan".match(fullNameRegex);

console.log("Full name:", fullName[0]);

console.log("First name:", fullName[1]);

console.log("Last name:", fullName[2]);

// Named groups
const employeeRegex =
    /(?<first>\w+)\s+(?<last>\w+)/;

const employee =
    "Sarah Connor".match(employeeRegex);

console.log("\nNamed Groups:");

console.log("First:", employee.groups.first);

console.log("Last:", employee.groups.last);

// Non-capturing group
const websiteRegex =
    /(?:https?:\/\/)?(?:www\.)?(\w+\.\w+)/;

const website =
    "https://www.google.com".match(websiteRegex);

console.log("\nWebsite domain:", website[1]);

// Backreferences
const repeatedWords =
    "yes yes no no maybe".match(/(\w+)\s+\1/g);

console.log("Repeated words:", repeatedWords);

console.log("\n=== Lookahead and Lookbehind ===");

// Positive lookahead
console.log(
    "Numbers before kg:",
    "50kg 70kg 100".match(/\d+(?=kg)/g)
);

// Negative lookahead
console.log(
    "Numbers not before kg:",
    "50kg 70 90kg".match(/\d+(?!kg)/g)
);

// Positive lookbehind
console.log(
    "Numbers after $:",
    "$50 $100 30$".match(/(?<=\$)\d+/g)
);

console.log("\n=== Validation Examples ===");

const checks = {

    email: value =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),

    phone: value =>
        /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value),

    password: value =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value),

    website: value =>
        /^(https?:\/\/)?([\w.-]+)\.[a-z]{2,6}$/i.test(value),

    postalCode: value =>
        /^\d{5}(-\d{4})?$/.test(value),

    colorCode: value =>
        /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(value)
};

const validationTests = [
    { type: 'email', value: 'test@gmail.com', expected: true },
    { type: 'phone', value: '123-456-7890', expected: true },
    { type: 'password', value: 'Strong123', expected: true },
    { type: 'password', value: 'weak', expected: false },
    { type: 'website', value: 'https://openai.com', expected: true },
    { type: 'colorCode', value: '#FFAA00', expected: true }
];

console.log("\nValidation Results:");

validationTests.forEach(test => {

    const result = checks[test.type](test.value);

    const symbol =
        result === test.expected ? '✔' : '✘';

    console.log(
        `${symbol} ${test.type}: "${test.value}" = ${result}`
    );
});

console.log("\n=== Extracting Data from Text ===");

const contactInfo = `
Alice Brown - alice@gmail.com - 555-111-2222
John White - john@yahoo.com - 555.333.4444
Mary Black - mary@company.org - (555) 777-8888
`;

// Extract emails
const foundEmails =
    contactInfo.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );

console.log("Emails:", foundEmails);

// Extract phone numbers
const foundPhones =
    contactInfo.match(
        /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g
    );

console.log("Phone numbers:", foundPhones);

// Extract contacts into objects
const personPattern =
    /(\w+\s+\w+)\s*-\s*(\S+@\S+)\s*-\s*([\d\s().-]+)/g;

const people =
    [...contactInfo.matchAll(personPattern)].map(match => ({
        name: match[1],
        email: match[2],
        phone: match[3].trim()
    }));

console.log("Contact Objects:", people);
