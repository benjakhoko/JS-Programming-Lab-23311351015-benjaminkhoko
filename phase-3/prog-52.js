console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [52] - [DOM CONTENT MANIPULATION - TEXTCONTENT, INNERHTML ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
// Program 52: Selecting DOM Elements

// This program works inside a browser environment

// Run code after HTML page finishes loading
document.addEventListener('DOMContentLoaded', function () {

    console.log("=== getElementById() ===");

    const title = document.getElementById('page-title');

    if (title) {

        console.log("Element found:", title);

        console.log("Element text:", title.textContent);
    }

    console.log("\n=== getElementsByClassName() ===");

    const products = document.getElementsByClassName('product');

    console.log("HTMLCollection:", products);

    console.log("Total products:", products.length);

    // Loop through HTMLCollection
    for (let i = 0; i < products.length; i++) {

        console.log(
            `Product ${i + 1}: ${products[i].textContent}`
        );
    }

    console.log("\n=== getElementsByTagName() ===");

    const headings = document.getElementsByTagName('h2');

    console.log("Heading elements:", headings);

    console.log(
        "First heading:",
        headings[0]?.textContent
    );

    console.log("\n=== querySelector() ===");

    const firstProduct =
        document.querySelector('.product');

    console.log(
        "First product:",
        firstProduct?.textContent
    );

    const specialElement =
        document.querySelector('.wrapper .special');

    console.log(
        "Nested selected element:",
        specialElement?.textContent
    );

    console.log("\n=== querySelectorAll() ===");

    const allProducts =
        document.querySelectorAll('.product');

    console.log("NodeList:", allProducts);

    allProducts.forEach((element, index) => {

        console.log(
            `Product ${index + 1}: ${element.textContent}`
        );
    });

    console.log("\n=== Selecting by Attribute ===");

    const inputField =
        document.querySelector('input[type="text"]');

    console.log("Input field:", inputField);

    console.log("\n=== Selecting Multiple Elements ===");

    const buttons =
        document.querySelectorAll('button');

    buttons.forEach((button, index) => {

        console.log(
            `Button ${index + 1}: ${button.textContent}`
        );
    });

    console.log("\n=== Checking Element Existence ===");

    const footer =
        document.getElementById('footer');

    if (footer) {

        console.log("Footer exists:", footer.textContent);

    } else {

        console.log("Footer element not found");
    }
});