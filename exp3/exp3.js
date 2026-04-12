"use strict";
class Car {
    Color;
    constructor(color) {
        this.Color = color;
    }
}
class Audi extends Car {
    Price;
    constructor(color, price) {
        super(color);
        this.Price = price;
    }
    display() {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    }
}
let obj = new Audi(" Black", 8500000);
obj.display();
