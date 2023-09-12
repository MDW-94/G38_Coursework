const Pet = require('./pet.js');
const Person = require('./person.js');


const scooby = new Pet('Scooby Doo', 'Dog');

const shaggy = new Person('Shaggy Rogers', scooby);
console.log(shaggy.greet());
shaggy.feedPet('Scooby Snack');