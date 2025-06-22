var x = {}; // same as ket x = new Object();
Object.getPrototypeOf(x);
// also can get the prototype using x.__proto__ but it is not supported in every modern browser. Stick to Object.getPrototypeOf()
x.toString(); // x has that property, since it inherits from Object
var y = [];
Object.getPrototypeOf(y); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
var y_proto = Object.getPrototypeOf(y);
var y_proto_proto = Object.getPrototypeOf(y_proto);
y_proto === Array.prototype; // true
y_proto_proto === Object.prototype; //true
Array.prototype.isPrototypeOf(y); // true
Object.prototype.isPrototypeOf(Array); // true
y instanceof Array; // true
// initialize a constructor function for a new hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
}
var hero1 = new Hero("Bjorn", 1);
Hero.prototype.greet = function () {
    return this.name + " says Hello.";
};
hero1.greet();
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level);
    // Add new property
    this.weapon = weapon;
}
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Warrior.prototype.attack = function () {
    return this.name + " attacks with " + this.weapon;
};
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}
Healer.prototype.heal = function () {
    return this.name + " casts " + this.spell;
};
var hero_w = new Warrior("Bjorn", 1, "axe");
var hero_h = new Healer("Kanin", 1, "healing hands");
hero_w.attack();
hero_h.heal();
hero_w.greet();
hero_h.greet();
