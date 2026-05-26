console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [60] - [Navigator Object and Browser Detection] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
// Navigator Object and Browser Detection

// Display navigator object information
console.log("Browser Name:", navigator.appName);
console.log("Browser Version:", navigator.appVersion);
console.log("User Agent:", navigator.userAgent);
console.log("Platform:", navigator.platform);
console.log("Language:", navigator.language);
console.log("Cookies Enabled:", navigator.cookieEnabled);
console.log("Online Status:", navigator.onLine);

// Browser Detection
let browserName = "Unknown Browser";

if (navigator.userAgent.indexOf("Chrome") !== -1) {
    browserName = "Google Chrome";
} 
else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    browserName = "Mozilla Firefox";
} 
else if (navigator.userAgent.indexOf("Safari") !== -1) {
    browserName = "Safari";
} 
else if (navigator.userAgent.indexOf("Edge") !== -1) {
    browserName = "Microsoft Edge";
} 
else if (navigator.userAgent.indexOf("Opera") !== -1 || navigator.userAgent.indexOf("OPR") !== -1) {
    browserName = "Opera";
} 
else if (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode) {
    browserName = "Internet Explorer";
}

// Display detected browser
console.log("Detected Browser:", browserName);