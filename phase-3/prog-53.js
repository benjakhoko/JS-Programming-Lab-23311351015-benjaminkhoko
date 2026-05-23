console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [53] - [DOM ATTRIBUTES AND CLASSES - SETATTRIBUTE, CLASSLIST ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));  
// Program 53: Working with attributes and CSS classes 
document.addEventListener('DOMContentLoaded', function() {  
     
    console.log("--- Working with Attributes ---"); 
     
    const image = document.getElementById('demo-image'); 
     
    if (image) { 
        // getAttribute 
        console.log("src:", image.getAttribute('src')); 
        console.log("alt:", image.getAttribute('alt')); 
        console.log("data-id:", image.getAttribute('data-id')); 
         
        // setAttribute 
        image.setAttribute('alt', 'Updated description'); 
        image.setAttribute('data-loaded', 'true'); 
        image.setAttribute('loading', 'lazy'); 
         
        // hasAttribute 
        console.log("Has alt?", image.hasAttribute('alt')); 
        console.log("Has title?", image.hasAttribute('title')); 
         
        // removeAttribute 
        image.removeAttribute('data-id'); 
        console.log("After remove data-id:", image.hasAttribute('data-id')); 
         
        // Direct property access (for standard attributes) 
 
        console.log("Direct src:", image.src); 
        console.log("Direct alt:", image.alt); 
        image.title = "Image title set directly"; 
    } 
     
    console.log("\n--- Data Attributes ---"); 
    const userCard = document.getElementById('user-card'); 
     
    if (userCard) { 
        // Using dataset 
        console.log("Dataset:", userCard.dataset); 
        console.log("User ID:", userCard.dataset.userId); 
        console.log("User Role:", userCard.dataset.userRole); 
         
        // Setting dataset 
        userCard.dataset.lastLogin = new Date().toISOString(); 
        userCard.dataset.loginCount = '42'; 
        console.log("Updated dataset:", userCard.dataset); 
         
        // dataset automatically converts kebab-case to camelCase 
        console.log("user-role becomes:", userCard.dataset.userRole); 
    } 
     
    console.log("\n--- Working with Classes - className ---"); 
    const box = document.getElementById('demo-box'); 
     
    if (box) { 
        // className (string manipulation - old way) 
        console.log("Original className:", box.className); 
        box.className += ' highlighted'; 
        console.log("After adding class:", box.className); 
        box.className = box.className.replace('highlighted', '').trim(); 
        console.log("After removing class:", box.className); 
    } 
     
    console.log("\n--- Working with Classes - classList (Modern) ---"); 
    const modernBox = document.getElementById('modern-box'); 
     
    if (modernBox) { 
        // add 
        modernBox.classList.add('active', 'visible'); 
        console.log("After add:", modernBox.className); 
         
        // remove 
        modernBox.classList.remove('visible'); 
        console.log("After remove:", modernBox.className); 
         
        // toggle 
        modernBox.classList.toggle('selected'); 
        console.log("After toggle (add):", modernBox.className);  
        modernBox.classList.toggle('selected'); 
        console.log("After toggle (remove):", modernBox.className); 
         
        // toggle with condition 
        const isDarkMode = true; 
        modernBox.classList.toggle('dark-mode', isDarkMode); 
        console.log("Conditional toggle:", modernBox.className); 
         
        // contains 
        console.log("Contains 'active'?", modernBox.classList.contains('active')); 
        console.log("Contains 'hidden'?", 
modernBox.classList.contains('hidden')); 
         
        // replace 
        modernBox.classList.replace('active', 'enabled'); 
        console.log("After replace:", modernBox.className); 
         
        // length and iteration 
        console.log("Number of classes:", modernBox.classList.length); 
        console.log("All classes:", [...modernBox.classList]); 
    } 
     
    console.log("\n--- Style Property ---"); 
    const styledElement = document.getElementById('styled-element'); 
    if (styledElement) { 
        // Individual styles 
        styledElement.style.backgroundColor = '#f0f0f0'; 
        styledElement.style.color = '#333'; 
        styledElement.style.padding = '15px'; 
        styledElement.style.borderRadius = '5px'; 
        styledElement.style.border = '1px solid #ccc'; 
         
        // Multiple styles with cssText 
        // styledElement.style.cssText = ` 
        //     background-color: #e0e0e0; 
        //     color: #000; 
        //     font-size: 18px; 
        // `; 
         
        // Getting computed styles 
        const computed = window.getComputedStyle(styledElement); 
        console.log("Computed background:", computed.backgroundColor); 
        console.log("Computed font-size:", computed.fontSize); 
    } 
     
    console.log("\n--- Practical: Interactive Element ---"); 
    const interactiveBtn = document.getElementById('interactive-btn'); 
    const statusDiv = document.getElementById('status'); 
    if (interactiveBtn && statusDiv) { 
        let clickCount = 0; 
         
        interactiveBtn.addEventListener('click', function() { 
            clickCount++; 
             
            // Update attributes 
            this.setAttribute('data-clicks', clickCount); 
             
            // Update classes 
            this.classList.toggle('clicked'); 
             
            if (clickCount >= 5) { 
                this.classList.add('expert'); 
            } 
             
            // Update content 
            statusDiv.textContent = `Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}`; 
            statusDiv.classList.add('updated'); 
             
            // Update dataset 
            statusDiv.dataset.timestamp = Date.now(); 
        }); 
    } 
}); 
 
