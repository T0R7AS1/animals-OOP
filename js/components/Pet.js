import { Animals } from './Animals.js';
class Pet extends Animals {
    constructor(name, color) {
        super (name, color);
        this.environment = 'land';
        this.outside = 'fur';
    }
}
export { Pet }