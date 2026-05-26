// ================= PROGRAM HEADER =================
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [61] - { DOM Tree Traversal - Comprehensive Example }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[23311351015]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// ================= DOM TREE TRAVERSAL =================

// Select the parent element
const parent = document.getElementById("parent");

// Display parent element
console.log("Parent Element:", parent);

// Access child elements
console.log("First Child:", parent.firstElementChild);
console.log("Last Child:", parent.lastElementChild);

// Access all children
console.log("All Children:");
for (let child of parent.children) {
    console.log(child.textContent);
}

// Traverse to siblings
const secondChild = parent.children[1];

console.log("Current Element:", secondChild.textContent);
console.log("Previous Sibling:", secondChild.previousElementSibling.textContent);
console.log("Next Sibling:", secondChild.nextElementSibling.textContent);

// Traverse upward to parent
const child = document.getElementById("child3");

console.log("Child Element:", child.textContent);
console.log("Parent of Child:", child.parentElement.id);

// Traverse descendants
console.log("Query Selector Example:");
const allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach((para, index) => {
    console.log(`Paragraph ${index + 1}:`, para.textContent);
});

console.log("=".repeat(55));
console.log("DOM Tree Traversal Completed Successfully!");