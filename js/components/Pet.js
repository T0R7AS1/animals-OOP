class Pet {
    constructor(name, color) {
        this.breed = 'Unknown animal'
        this.environment = 'land';
        this.name = name;
        this.color = color;
        this.sound = 'Miau au nom';
    }
    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and my fur is ${this.color}
         and i say ${this.sound}`);
    }
}

export { Pet }