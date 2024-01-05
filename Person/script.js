// Define the Person class
class Person {
    // Constructor for the Person class
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method to display details of the person
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}

// Create an instance of the Person class
let character = new Person("Rivian Rithick", 23, "rithick@gmail.com");

// Display details of the person using the displayDetails method
character.displayDetails();
