// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [71] - { XML with CSS Styling }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// ================= XML WITH CSS STYLING =================

// XML Data
const xmlData = `
<books>
    <book>
        <title>JavaScript Fundamentals</title>
        <author>Benjamin Khoko</author>
        <price>25</price>
    </book>

    <book>
        <title>Web Development Basics</title>
        <author>Alice Banda</author>
        <price>30</price>
    </book>

    <book>
        <title>Advanced CSS Design</title>
        <author>John Phiri</author>
        <price>40</price>
    </book>
</books>
`;

console.log("XML Data Loaded Successfully");

// ================= PARSE XML =================

const parser = new DOMParser();

const xmlDocument = parser.parseFromString(xmlData, "text/xml");

console.log("XML Parsed Successfully");

// ================= CREATE STYLE ELEMENT =================

const style = document.createElement("style");

style.textContent = `
    .book-container {
        margin: 20px;
        padding: 20px;
        border: 2px solid black;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
    }

    .book-card {
        background-color: white;
        border: 1px solid gray;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
    }

    .book-title {
        color: darkblue;
        font-size: 22px;
        font-weight: bold;
    }

    .book-author {
        color: green;
        font-size: 18px;
    }

    .book-price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
`;

document.head.appendChild(style);

console.log("CSS Styling Applied");

// ================= CREATE DISPLAY CONTAINER =================

const container = document.createElement("div");

container.className = "book-container";

document.body.appendChild(container);

console.log("Display Container Created");

// ================= EXTRACT XML DATA =================

const books = xmlDocument.getElementsByTagName("book");

console.log("Total Books Found:", books.length);

// ================= DISPLAY BOOK INFORMATION =================

for (let i = 0; i < books.length; i++) {

    const title =
        books[i].getElementsByTagName("title")[0].textContent;

    const author =
        books[i].getElementsByTagName("author")[0].textContent;

    const price =
        books[i].getElementsByTagName("price")[0].textContent;

    // Create Book Card
    const bookCard = document.createElement("div");

    bookCard.className = "book-card";

    bookCard.innerHTML = `
        <div class="book-title">${title}</div>
        <div class="book-author">Author: ${author}</div>
        <div class="book-price">Price: $${price}</div>
    `;

    container.appendChild(bookCard);

    console.log("Book Displayed:", title);
}

// ================= EXTRA XML DETAILS =================

console.log("Root Element:", xmlDocument.documentElement.nodeName);

console.log(
    "First Book Title:",
    books[0].getElementsByTagName("title")[0].textContent
);

console.log(
    "Last Book Author:",
    books[books.length - 1]
        .getElementsByTagName("author")[0]
        .textContent
);

console.log("=".repeat(60));
console.log("XML with CSS Styling Executed Successfully!");