class UberPriceCalculator {
    // Constructor for base price, cost per Km, and cost per minute
    constructor(baseprice, costPerKm, costPerMinute) {
        this.baseprice = baseprice;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    // Method to calculate the total price based on distance and time
    calculatePrice(distance, time) {
        // Calculate price based on formula: base price + (distance * cost per km) + (time * cost per minute)
        const totalPrice = this.baseprice + (distance * this.costPerKm) + (time * this.costPerMinute);
        return totalPrice;
    }
}

let calculator = new UberPriceCalculator(50, 6, 2);


let price = calculator.calculatePrice(10, 20);
console.log(`The Uber fare for the ride is: ₹${price}`);
