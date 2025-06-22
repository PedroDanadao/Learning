let x = {}; // same as ket x = new Object();

Object.getPrototypeOf(x);

// also can get the prototype using x.__proto__ but it is not supported in every modern browser. Stick to Object.getPrototypeOf()

x.toString(); // x has that property, since it inherits from Object

let y = [];
Object.getPrototypeOf(y); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

let y_proto = Object.getPrototypeOf(y);
let y_proto_proto = Object.getPrototypeOf(y_proto);

y_proto === Array.prototype; // true
y_proto_proto === Object.prototype; //true

Array.prototype.isPrototypeOf(y); // true
Object.prototype.isPrototypeOf(Array); // true

y instanceof Array; // true


// initialize a constructor function for a new hero
function Hero(name: string, level: number) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero("Bjorn", 1);

Hero.prototype.greet = function() {
    return `${this.name} says Hello.`;
}

hero1.greet();

function Warrior(name: string, level: number, weapon: string) {
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add new property
    this.weapon = weapon;
}
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

Warrior.prototype.attack = function() {
    return `${this.name} attacks with ${this.weapon}`;
}
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

function Healer(name: string, level: number, spell: string) {
    Hero.call(this, name, level);

    this.spell = spell;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}`;
}

let hero_w = new Warrior("Bjorn", 1, "axe");
let hero_h = new Healer("Kanin", 1, "healing hands");

hero_w.attack();
hero_h.heal();

hero_w.greet();
hero_h.greet();