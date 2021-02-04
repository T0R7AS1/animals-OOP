class Animals {
    constructor(name, color) {
        this.breed = 'unknown species';
        this.name = name;
        this.color = color;
        this.sound = "No Sound";
        this.environment = 'What kind of animals is this?';
        this.outside = 'scales/fur/feathers'
    }
    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, and my ${this.outside} is ${this.color}
         and i say ${this.sound}`);
    }
}
export { Animals }