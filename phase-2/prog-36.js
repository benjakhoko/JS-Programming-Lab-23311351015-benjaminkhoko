console.log("STUDENT: [benjamin khoko]");
console.log("ID: [23311351015]");
console.log("PROGRAM: [36] - [ES6 CLASSES - INHERITANCE WITH EXTENDS ] ");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[Your Institution ID]" + Date.now()).substring(0, 
12));
console.log("=".repeat(55));
// Program 36: Class inheritance using extends and super 
 
// Parent class 
class Vehicle { 
    constructor(make, model, year) { 
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this._speed = 0; 
        this._engine = false; 
    } 
     
    startEngine() { 
        if (!this._engine) { 
            this._engine = true; 
            console.log(`${this.make} ${this.model} engine started.`); 
        } else { 
            console.log("Engine is already running."); 
        } 
    } 
     
    stopEngine() { 
        if (this._engine) { 
            this._engine = false;  
            this._speed = 0; 
            console.log(`${this.make} ${this.model} engine stopped.`); 
        } else { 
            console.log("Engine is already off."); 
        } 
    } 
     
    accelerate(amount) { 
        if (this._engine) { 
            this._speed += amount; 
            console.log(`Accelerating to ${this._speed} km/h`); 
        } else { 
            console.log("Start the engine first!"); 
        } 
    } 
     
    brake(amount) { 
        this._speed = Math.max(0, this._speed - amount); 
        console.log(`Braking to ${this._speed} km/h`); 
    } 
     
    get speed() { 
        return this._speed; 
    }  
    getInfo() { 
        return `${this.year} ${this.make} ${this.model}`; 
    } 
} 
 
// Child class inheriting from Vehicle 
class Car extends Vehicle { 
    constructor(make, model, year, doors, fuelType) { 
        // Call parent constructor 
        super(make, model, year); 
        this.doors = doors; 
        this.fuelType = fuelType; 
        this._trunkOpen = false; 
    } 
     
    // Additional methods specific to Car 
    openTrunk() { 
        this._trunkOpen = true; 
        console.log("Trunk opened."); 
    } 
     
    closeTrunk() { 
        this._trunkOpen = false; 
        console.log("Trunk closed."); 
    }  
     
    // Override parent method 
    getInfo() { 
        return `${super.getInfo()} - ${this.doors} doors, ${this.fuelType}`; 
    } 
     
    // Override accelerate with car-specific behavior 
    accelerate(amount) { 
        super.accelerate(amount); 
        if (this.speed > 120) { 
            console.log("Warning: High speed detected!"); 
        } 
    } 
} 
 
// Another child class 
class Motorcycle extends Vehicle { 
    constructor(make, model, year, type) { 
        super(make, model, year); 
        this.type = type; // Sport, Cruiser, etc. 
        this._helmetOn = false; 
    } 
     
    putOnHelmet() { 
        this._helmetOn = true;  
        console.log("Helmet on - safe to ride!"); 
    } 
     
    // Override startEngine with safety check 
    startEngine() { 
        if (this._helmetOn) { 
            super.startEngine(); 
        } else { 
            console.log("Put on your helmet first!"); 
        } 
    } 
     
    wheelie() { 
        if (this._engine && this._speed > 20) { 
            console.log("              Doing a wheelie!"); 
        } else { 
            console.log("Need more speed for a wheelie!"); 
        } 
    } 
     
    getInfo() { 
        return `${super.getInfo()} - ${this.type} Motorcycle`; 
    } 
} 
 
// Testing the inheritance 
console.log("--- Car Instance ---"); 
const myCar = new Car("Toyota", "Camry", 2022, 4, "Hybrid"); 
console.log(myCar.getInfo()); 
myCar.startEngine(); 
myCar.accelerate(50); 
myCar.accelerate(80); 
myCar.brake(30); 
myCar.openTrunk(); 
myCar.closeTrunk(); 
myCar.stopEngine(); 
console.log("\n--- Motorcycle Instance ---"); 
const myBike = new Motorcycle("Yamaha", "R6", 2023, "Sport"); 
console.log(myBike.getInfo()); 
myBike.startEngine(); // Won't start without helmet 
myBike.putOnHelmet(); 
myBike.startEngine(); 
myBike.accelerate(30); 
myBike.wheelie(); 
myBike.stopEngine(); 
console.log("\n--- Instance Checks ---"); 
console.log("myCar instanceof Car:", myCar instanceof Car); // true 
console.log("myCar instanceof Vehicle:", myCar instanceof Vehicle); // true 
console.log("myBike instanceof Motorcycle:", myBike instanceof 
Motorcycle); // true 
console.log("myBike instanceof Vehicle:", myBike instanceof Vehicle); // true 
console.log("myBike instanceof Car:", myBike instanceof Car); // false 
