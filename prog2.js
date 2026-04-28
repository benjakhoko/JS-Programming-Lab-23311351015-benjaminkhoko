function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  };
}
const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Jane', 'Smith', 25);

person1.greet();
person2.greet(); 