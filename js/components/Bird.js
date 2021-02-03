class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'Unknown animal';
    }
    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, and my wings is ${this.color}
        and i say ${this.sound}`);
    }
}
export { Bird }