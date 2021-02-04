import { Animals } from "./Animals.js";

class Bird extends Animals {
    constructor(name, color) {
        super(name, color);
        this.wingsCount = 2;
        this.canFly = true;
        this.environment = 'land';
        this.outside = 'feathers';
    }
    flyAway() {
        if (this.canFly === false) {
            console.log(`${this.breed} ${this.name} has ${this.wingsCount} wings but he cant fly because he is not capable of it ${this.canFly}`);
            return;
        }
        console.log(`${this.breed} ${this.name} has ${this.wingsCount} wings and he flew away beacause he is able to fly ${this.canFly}`);
    }
}
export { Bird }