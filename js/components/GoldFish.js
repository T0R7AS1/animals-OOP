import {Fish} from './Fish.js'
class GoldFish extends Fish{
    constructor(name, color, grantsWishes) {
        super (name, color,)
        this.breed = 'GoldFish';
        this.grantsWishes = grantsWishes ?? false;
        this.sound = 'Bul bul';
    }
    
    grantsWishes(){
        if (!this.grantsWishes) {
            console.log(`${this.breed} ${this.name} doesnt hrant wishes`);
            return false;
        }
        console.log(`${this.breed} ${this.name} grants your wish ${wish}!`);
    }
}

export { GoldFish }