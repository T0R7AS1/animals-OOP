import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';
import { Pet } from './components/Pet.js';
import { Nemo } from './components/Nemo.js';
import { GoldFish } from './components/GoldFish.js';
import { Chicken } from './components/Chicken.js';
import { Parrot } from './components/Parrot.js';
import { Eagle } from './components/Eagle.js';
import { DragonFly } from './components/DragonFly.js';


const rexas = new Dog('Rexas', 'brown');
console.log(rexas);
rexas.voice();
rexas.introduce();

const nemo = new Nemo('Nemo', 'blue');
console.log(nemo);
nemo.voice();

const bunita = new GoldFish('bunita', 'gold', 0);
bunita.introduce();
bunita.voice();
console.log(bunita);

const mykolas = new Chicken('mykolas', 'white')
mykolas.introduce();
mykolas.voice();
console.log(mykolas);
mykolas.flyAway();

const aivaras = new DragonFly('Aivaras', 'white');
console.log(aivaras);
aivaras.voice();
aivaras.imposter();
const eividas = new Eagle('Eividas', 'black');
eividas.voice();
eividas.introduce();