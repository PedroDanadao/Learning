// class Rectangle {
//     constuctor(height: number, width: number) {
//         this.height = height;
//         this.width = width;
//     }
// }

// Expression; the class is anonymous but assigned to a variable
const Rectangle_2 = class {
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
};

// Expression; the class has its own name
const Rectangle_3 = class Rectangle2 {
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
};

class Rectangle {
    #height = 0 // private property
    width: number // public property

    constructor(height: number, width: number) {
        this.#height = height;
        this.width = width;
    }

    private calc_area() {
        return this.#height * this.width;
    }

    get area() {
        return this.calc_area();
    }

    *get_sides() { // public method
        yield this.#height;
        yield this.width;
        yield this.#height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);

// console.log(square.area);
// console.log([...square.get_sides()]);


class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static display_name = "Point";
    static distance(a: Point, b: Point) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

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
    name = ''

    constructor(name:  string) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
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
    name = ''

    constructor(name: string) {
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