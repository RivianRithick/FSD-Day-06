class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(radius) {
        this.radius = radius;
    }

    // Getter for color
    getColor() {
        return this.color;
    }

    // Setter for color
    setColor(color) {
        this.color = color;
    }

    // Method to calculate area of the circle
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Method to calculate circumference of the circle
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    // toString method to represent the Circle object as a string
    toString() {
        return `radius=${this.radius}, color=${this.color}`;
    }
}

const circle1 = new Circle(); 
console.log(circle1.toString()); 

const circle2 = new Circle(2.5, "blue"); 
console.log(circle2.toString()); 

console.log(`Area of circle: ${circle2.getArea()}`); 
console.log(`Circumference of circle: ${circle2.getCircumference()}`); 
