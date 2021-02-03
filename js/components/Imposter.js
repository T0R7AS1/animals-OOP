import { Bird } from './Bird.js';
class Imposter extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Imposter';
        this.sound = 'bzzzzzz';
        this.Imposter = true;
    }
    imposter() {
        console.log(`${this.breed} ${this.name} is a sneaky imposter ${this.Imposter}`);
    }
}
export { Imposter }