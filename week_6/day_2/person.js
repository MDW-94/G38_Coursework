const Person = function(name, pet){
    this.name = name
    this.pet = pet
};

Person.prototype.greet = function(){
    return "Hi! My name is " + this.name
};

Person.prototype.feedPet = function(food){
    console.log(`${this.name} fed ${this.pet.name} a ${food}`);
    this.pet.eat(food)
};

// const shaggy = new Person('Shaggy Rogers')
// const velma = new Person('Velma Dinkley')

// console.log(velma.greet());

module.exports = Person