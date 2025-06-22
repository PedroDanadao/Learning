function Animal() {
    this.eats = true;
}
Animal.prototype.walk = function () {
    if (!this.is_sleeping) {
        alert("Animal Walk");
    }
};
Animal.prototype.sleep = function () {
    this.is_sleeping = true;
};
function Rabbit() {
    Animal.call(this); // similar to ParentClass.__init__(self) in python
    this.jumps = true;
}
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype); // similar to ChildClass(ParentClass) in python
Rabbit.prototype.walk = function () {
    alert("Rabbit! Bounce-bounce!");
};
function LongEars() {
    Rabbit.call(this);
    this.ear_length = 10;
}
Object.setPrototypeOf(LongEars.prototype, Rabbit.prototype);
var my_rabbit = new Rabbit();
my_rabbit.sleep();
// my_rabbit.walk();
var my_long_ears = new LongEars();
// for (let prop in my_rabbit) alert(prop); // this will alert each property of my_rabbit(including the inherited ones  )
function User() {
    this.name = "John";
    this.surname = "Smith";
}
Object.defineProperty(User.prototype, "full_name", {
    get: function full_name() {
        return this.name + " " + this.surname;
    },
    set: function full_name(value) {
        var _a;
        _a = value.split(' '), this.name = _a[0], this.surname = _a[1];
    }
}); // this is similar to python's @property and @attribute_name.setter
function Admin() {
    User.call(this);
    this.is_admin = true;
}
Object.setPrototypeOf(Admin.prototype, User.prototype);
var my_user = new User();
var my_admin = new Admin();
