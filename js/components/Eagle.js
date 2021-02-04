import { Bird } from './Bird.js';
class Eagle extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Eagle';
        this.sound = 'KAKAKAKA';
    }
}
export { Eagle }