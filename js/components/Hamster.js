import { Pet } from './Pet.js';
class Hamster extends Pet {
    constructor(name, color) {
        super(name, color)
        this.breed = 'Hamster';
        this.sound = 'Nom Nom';
        this.canEatTillDeath = true;
    }
}

export { Hamster }