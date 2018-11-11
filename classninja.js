class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this._speed = 3;
        this._strength = 3;
        //declares this - makes it private - will not log as is
    }
    get strength (){
        return this._strength
    }
    sayName() {
        console.log(`My name is ${this.name}.`);
        return this;
    }
    showStats() {
        console.log(
            `Name: ${this.name} , Strength: $ ${this._strength}, Speed: ${this._speed}, Health: ${this.health}`
        );
    }
    drinkSake() {
        this.health += 10;
    }
    punch(victim) {
        if (victim instanceof Ninja) {
            //this Ninja refers to the CLASS Ninja
            victim.health -= 5;

        }
        else {
            console.log("You can only punch ninjas.");
        }
    }
    kick(victim) {
        if (victim instanceof Ninja) {
            const damage = 15 * this.strength;
            //this Ninja refers to the CLASS Ninja
            victim.health -= damage;
        }
        else {
            console.log("You can only kick ninjas.");
        }

        const newNinja = new Ninja("Ozzy");
        const otherNinja = new Ninja('Eminem');
        newNinja.drinkSake();
        console.log(otherNinja);
        newNinja.punch(otherNinja);
        console.log(otherNinja);
        newNinja.punch("JLo");
        newNinja.punch("Amanda");
    }   
}
class Sensei extends Ninja{
    constructor (name, health, speed){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    }

    wisdom() {
    this.drinkSake();
    console.log("Some wise comment.");
    return this;
    }
}
var ninja = new Ninja("Master Ninja!");
ninja.drinkSake().showStats();

var sensei = new Sensei ("Master Sensei!");
sensei.sayName().showStats().wisdom().showStats();

console.log(SenseiOz);
// console.log(newNinja);