// Create an object car 9ith properties brand, model, and a method displayDetails that prints "Brand: [brand5,
// Model: [model5". Test the method using this key9ord.
function Car(brand, model) {
    this.brand = brand;
    this.model = model;

    this.displayDetails = function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    };
}

const car = new Car('Toyota', 'Corolla');
car.displayDetails(); 