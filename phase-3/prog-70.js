
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [70] - [ XML Parsing and Display with JavaScript ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

// XML PARSING AND DISPLAY 

// XML Data
const xmlData = `
<students>
    <student>
        <name>Benjamin Khoko</name>
        <course>Computer Science</course>
        <year>3</year>
    </student>

    <student>
        <name>Alice Banda</name>
        <course>Information Technology</course>
        <year>2</year>
    </student>

    <student>
        <name>John Phiri</name>
        <course>Software Engineering</course>
        <year>4</year>
    </student>
</students>
`;

console.log("XML Data Loaded Successfully");

// ================= PARSE XML =================

const parser = new DOMParser();

const xmlDocument = parser.parseFromString(xmlData, "text/xml");

console.log("XML Parsed Successfully");

// ================= CREATE DISPLAY AREA =================

const displayArea = document.createElement("div");

displayArea.style.margin = "20px";
displayArea.style.padding = "20px";
displayArea.style.border = "2px solid black";
displayArea.style.backgroundColor = "#f5f5f5";

document.body.appendChild(displayArea);

console.log("Display Area Created");

// ================= EXTRACT STUDENT DATA =================

const students = xmlDocument.getElementsByTagName("student");

console.log("Number of Students Found:", students.length);

// ================= DISPLAY STUDENT INFORMATION =================

for (let i = 0; i < students.length; i++) {

    const name =
        students[i].getElementsByTagName("name")[0].textContent;

    const course =
        students[i].getElementsByTagName("course")[0].textContent;

    const year =
        students[i].getElementsByTagName("year")[0].textContent;

    // Create student information block
    const studentInfo = document.createElement("div");

    studentInfo.style.marginBottom = "15px";
    studentInfo.style.padding = "10px";
    studentInfo.style.backgroundColor = "white";
    studentInfo.style.border = "1px solid gray";

    studentInfo.innerHTML = `
        <h3>Student ${i + 1}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Year:</strong> ${year}</p>
    `;

    displayArea.appendChild(studentInfo);

    console.log("Student Displayed:", name);
}

// ================= EXTRA XML INFORMATION =================

console.log("Root Element Name:", xmlDocument.documentElement.nodeName);

console.log(
    "First Student Name:",
    students[0].getElementsByTagName("name")[0].textContent
);

console.log(
    "Last Student Course:",
    students[students.length - 1]
        .getElementsByTagName("course")[0]
        .textContent
);

console.log("=".repeat(60));
console.log("XML Parsing and Display Executed Successfully!");