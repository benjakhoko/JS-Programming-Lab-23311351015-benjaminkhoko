
console.log("STUDENT: [Benjamin Khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [72] - { XSLT Transformation Example }");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351015" + Date.now()).substring(0, 12));
console.log("=".repeat(60));

//  XSLT TRANSFORMATION EXAMPLE =================

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

// ================= XSLT DATA =================

const xsltData = `
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

    <html>
        <body style="font-family: Arial;">

            <h2>Student Information</h2>

            <table border="1" cellpadding="10" cellspacing="0">
                <tr bgcolor="lightblue">
                    <th>Name</th>
                    <th>Course</th>
                    <th>Year</th>
                </tr>

                <xsl:for-each select="students/student">
                    <tr>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="course"/></td>
                        <td><xsl:value-of select="year"/></td>
                    </tr>
                </xsl:for-each>

            </table>

        </body>
    </html>

</xsl:template>

</xsl:stylesheet>
`;

console.log("XSLT Data Loaded Successfully");

// ================= PARSE XML =================

const parser = new DOMParser();

const xml = parser.parseFromString(xmlData, "text/xml");

const xsl = parser.parseFromString(xsltData, "text/xml");

console.log("XML and XSL Parsed Successfully");

// ================= CREATE XSLT PROCESSOR =================

const processor = new XSLTProcessor();

processor.importStylesheet(xsl);

console.log("XSLT Processor Initialized");

// ================= TRANSFORM XML =================

const resultDocument = processor.transformToFragment(xml, document);

console.log("XML Transformation Completed");

// ================= DISPLAY RESULT =================

const outputContainer = document.createElement("div");

outputContainer.style.margin = "20px";
outputContainer.style.padding = "20px";
outputContainer.style.border = "2px solid black";
outputContainer.style.backgroundColor = "#f9f9f9";

document.body.appendChild(outputContainer);

outputContainer.appendChild(resultDocument);

console.log("Transformed Data Displayed Successfully");

// ================= EXTRA INFORMATION =================

const students = xml.getElementsByTagName("student");

console.log("Total Students:", students.length);

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
console.log("XSLT Transformation Example Executed Successfully!");