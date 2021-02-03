class Fish {
    constructor(name, color) { 
        this.breed = 'Nemo';
        this.environment = 'water';
        this.name = name;
        this.color = color;
        this.sound = 'Bul bul';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and my scales is ${this.color}
         and i say ${this.sound}`);
    }
}

export { Fish }