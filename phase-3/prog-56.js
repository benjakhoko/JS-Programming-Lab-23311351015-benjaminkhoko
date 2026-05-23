console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [56] - [EVENT DELEGATION AND BUBBLING   ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
// Program 56: Event propagation and delegation 
 
document.addEventListener('DOMContentLoaded', function() { 
     
    console.log("--- Event Bubbling ---"); 
     
    const grandparent = document.getElementById('grandparent'); 
    const parent = document.getElementById('parent'); 
    const child = document.getElementById('child'); 
     
    if (grandparent && parent && child) { 
        grandparent.addEventListener('click', function(e) { 
            console.log('Grandparent clicked (bubbling phase)'); 
 
            console.log('Target:', e.target.id); 
            console.log('CurrentTarget:', e.currentTarget.id); 
        }); 
         
        parent.addEventListener('click', function(e) { 
            console.log('Parent clicked (bubbling phase)'); 
        }); 
         
        child.addEventListener('click', function(e) { 
            console.log('Child clicked (bubbling phase)'); 
        }); 
    } 
     
    console.log("\n--- Event Capturing ---"); 
     
    if (grandparent) { 
        grandparent.addEventListener('click', function(e) { 
            console.log('Grandparent clicked (CAPTURING phase)'); 
        }, { capture: true }); 
         
        parent.addEventListener('click', function(e) { 
            console.log('Parent clicked (CAPTURING phase)'); 
        }, true); // Alternative syntax 
    } 
     

    console.log("\n--- Stopping Propagation ---"); 
     
    const stopBtn = document.getElementById('stop-propagation'); 
    const stopContainer = document.getElementById('stop-container'); 
     
    if (stopContainer) { 
        stopContainer.addEventListener('click', function() { 
            console.log('Container clicked - this should NOT fire when button clicked'); 
        }); 
    } 
     
    if (stopBtn) { 
        stopBtn.addEventListener('click', function(e) { 
            console.log('Button clicked'); 
            e.stopPropagation(); // Stops bubbling 
            console.log('Propagation stopped!'); 
        }); 
    } 
     
    console.log("\n--- Event Delegation Pattern ---"); 
     
    const todoList = document.getElementById('todo-list'); 
    const addTodoBtn = document.getElementById('add-todo'); 
    const todoInput = document.getElementById('todo-input'); 

    const todoCount = document.getElementById('todo-count'); 
     
    // Single event listener on parent (delegation) 
    if (todoList) { 
        todoList.addEventListener('click', function(e) { 
            const target = e.target; 
             
            // Check if delete button was clicked 
            if (target.classList.contains('delete-btn')) { 
                const todoItem = target.closest('.todo-item'); 
                if (todoItem) { 
                    todoItem.remove(); 
                    updateTodoCount(); 
                    console.log('Todo deleted via delegation'); 
                } 
            } 
             
            // Check if checkbox was clicked 
            if (target.classList.contains('todo-checkbox')) { 
                const todoItem = target.closest('.todo-item'); 
                if (todoItem) { 
                    todoItem.classList.toggle('completed', target.checked); 
                    updateTodoCount(); 
                    console.log('Todo status updated via delegation'); 
                } 

            } 
             
            // Check if edit button was clicked 
            if (target.classList.contains('edit-btn')) { 
                const todoItem = target.closest('.todo-item'); 
                const todoText = todoItem.querySelector('.todo-text'); 
                const newText = prompt('Edit todo:', todoText.textContent); 
                if (newText && newText.trim()) { 
                    todoText.textContent = newText.trim(); 
                } 
            } 
        }); 
    } 
     
    function updateTodoCount() { 
        if (todoCount && todoList) { 
            const total = todoList.children.length; 
            const completed = todoList.querySelectorAll('.todoitem.completed').length; 
            todoCount.textContent = `${completed}/${total} completed`; 
        } 
    } 
     
    function createTodoItem(text) { 
        const li = document.createElement('li'); 
 
        li.className = 'todo-item'; 
        li.innerHTML = ` 
            <input type="checkbox" class="todo-checkbox"> 
            <span class="todo-text">${text}</span> 
            <button class="edit-btn">Edit</button> 
            <button class="delete-btn">Delete</button> 
        `; 
        return li; 
    } 
     
    if (addTodoBtn && todoInput && todoList) { 
        addTodoBtn.addEventListener('click', function() { 
            const text = todoInput.value.trim(); 
            if (text) { 
                todoList.appendChild(createTodoItem(text)); 
                todoInput.value = ''; 
                updateTodoCount(); 
            } 
        }); 
         
        // Add sample todos 
        ['Learn Event Delegation', 'Master DOM Manipulation', 'Build a Todo App'].forEach(text => { 
            todoList.appendChild(createTodoItem(text)); 
        }); 

        updateTodoCount(); 
    } 
     
    console.log("\n--- Dynamic Elements and Delegation ---"); 
     
    const dynamicContainer = document.getElementById('dynamiccontainer'); 
    const addDynamicBtn = document.getElementById('add-dynamic-btn'); 
     
    if (dynamicContainer) { 
        // Delegated listener - works for future elements! 
        dynamicContainer.addEventListener('click', function(e) { 
            if (e.target.classList.contains('dynamic-btn')) { 
                console.log('Dynamic button clicked:', e.target.dataset.id); 
                alert(`Button ${e.target.dataset.id} clicked!`); 
            } 
        }); 
         
        if (addDynamicBtn) { 
            let counter = 0; 
            addDynamicBtn.addEventListener('click', function() { 
                counter++; 
                const btn = document.createElement('button'); 
                btn.className = 'dynamic-btn'; 
                btn.dataset.id = counter; 

                btn.textContent = `Dynamic Button ${counter}`; 
                dynamicContainer.appendChild(btn); 
                console.log(`Added button ${counter} - delegation will work!`); 
            }); 
             
            // Add initial button 
            addDynamicBtn.click(); 
        } 
    } 
     
    console.log("\n--- Event Delegation with Data Attributes ---"); 
     
    const productGrid = document.getElementById('product-grid'); 
    const cartDisplay = document.getElementById('cart-display'); 
    let cart = []; 
     
    const products = [ 
        { id: 1, name: 'Laptop', price: 100 }, 
        { id: 2, name: 'Mouse', price: 25 }, 
        { id: 3, name: 'Keyboard', price: 75 }, 
        { id: 4, name: 'Monitor', price: 299 } 
    ]; 
     
    if (productGrid) { 
        // Render products 
 
        products.forEach(product => { 
            const card = document.createElement('div'); 
            card.className = 'product-card'; 
            card.dataset.productId = product.id; 
            card.dataset.price = product.price; 
            card.innerHTML = ` 
                <h3>${product.name}</h3> 
                <p>$${product.price}</p> 
                <button class="add-to-cart-btn" data-action="add">Add to 
Cart</button> 
                <button class="view-details-btn" data
action="view">Details</button> 
            `; 
            productGrid.appendChild(card); 
        }); 
         
        // Single delegated listener for all product actions 
        productGrid.addEventListener('click', function(e) { 
            const productCard = e.target.closest('.product-card'); 
            if (!productCard) return; 
             
            const productId = parseInt(productCard.dataset.productId); 
            const product = products.find(p => p.id === productId); 
            const action = e.target.dataset.action; 
             

            switch(action) { 
                case 'add': 
                    cart.push(product); 
                    updateCartDisplay(); 
                    console.log(`Added ${product.name} to cart`); 
                    break; 
                case 'view': 
                    alert(`${product.name}\nPrice: $${product.price}`); 
                    break; 
            } 
        }); 
    } 
     
    function updateCartDisplay() { 
        if (cartDisplay) { 
            const total = cart.reduce((sum, item) => sum + item.price, 0); 
            cartDisplay.innerHTML = ` 
                <h3>Cart (${cart.length} items)</h3> 
                <p>Total: $${total}</p> 
                <ul> 
                    ${cart.map(item => `<li>${item.name} - 
$${item.price}</li>`).join('')} 
                </ul> 
            `; 
        } 
 
    } 
     
    console.log("\n--- Preventing Default Behavior ---"); 
     
    const linkDemo = document.getElementById('link-demo'); 
    const formDemo = document.getElementById('prevent-form-demo'); 
     
    if (linkDemo) { 
        linkDemo.addEventListener('click', function(e) { 
            e.preventDefault(); 
            console.log('Link navigation prevented'); 
            alert('Navigation prevented! Check console.'); 
        }); 
    } 
     
    if (formDemo) { 
        formDemo.addEventListener('submit', function(e) { 
            e.preventDefault(); 
            console.log('Form submission prevented'); 
             
            // Custom validation 
            const email = this.querySelector('[name="email"]'); 
            if (email && !email.value.includes('@')) { 
                alert('Please enter a valid email!'); 
                return; 
            } 
             
            alert('Form validated! (Still prevented from actual submit)'); 
        }); 
    } 
}); 