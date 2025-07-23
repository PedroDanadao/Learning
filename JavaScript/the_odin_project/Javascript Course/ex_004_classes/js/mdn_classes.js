// class Rectangle {
//     constuctor(height: number, width: number) {
//         this.height = height;
//         this.width = width;
//     }
// }
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangle_height;
// Expression; the class is anonymous but assigned to a variable
const Rectangle_2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
// Expression; the class has its own name
const Rectangle_3 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
class Rectangle {
    constructor(height, width) {
        _Rectangle_height.set(this, 0); // private property
        __classPrivateFieldSet(this, _Rectangle_height, height, "f");
        this.width = width;
    }
    calc_area() {
        return __classPrivateFieldGet(this, _Rectangle_height, "f") * this.width;
    }
    get area() {
        return this.calc_area();
    }
    *get_sides() {
        yield __classPrivateFieldGet(this, _Rectangle_height, "f");
        yield this.width;
        yield __classPrivateFieldGet(this, _Rectangle_height, "f");
        yield this.width;
    }
}
_Rectangle_height = new WeakMap();
const square = new Rectangle(10, 10);
// console.log(square.area);
// console.log([...square.get_sides()]);
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
Point.display_name = "Point";
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
// Printed on console
// p1.display_name
// undefined
// p1.distance
// undefined
// p2.display_name
// undefined
// p2.distance
// undefined
// console.log(Point.display_name)
// Point
// undefined
// console.log(Point.distance(p1, p2))
// 7.0710678118654755
class Animal {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // similar to ParentClass.__init__(self, name) in python
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const d = new Dog("Toto");
// Printed on console
// d.speak();
// Toto barks.
class Cat {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}
const l = new Lion("Fuzy");
// Printed on console
// l.speak();
// Fuzy makes a noise.
// mdn_classes.js:189 Fuzy roars.
//# sourceMappingURL=mdn_classes.js.map