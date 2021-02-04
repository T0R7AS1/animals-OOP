import { Animals } from "./Animals.js";

class Fish extends Animals{
    constructor(name, color) { 
        super(name,color);
        this.environment = 'water';
        this.outside = 'scales';
    }
}

export { Fish }