class DateFormatter extends Date {
    get_formatted_date() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}

function hello(my_string: string){
    console.log(my_string)
}

// Printed on console
// console.log(new DateFormatter("August 28, 1986 12:37:02").get_formatted_date())
// 

// class ParentClass {
//     name:string

//     constructor() {
//         this.name = "ok";
//     }
// }

// class ChildClass extends ParentClass {
//     print_name() {
//         console.log(this.name);
//     }
// }

// const new_child = new ChildClass();


// function OldStyleClass() {
//     this.some_property = 1;
// }
// OldStyleClass.prototype.some_method = function() {};

// class ChildClass extends OldStyleClass {}

// class ModernClass {
//     some_property = 2;

//     some_method(){}
// }

// class AnotherChildClass extends ModernClass {}


// function ParentClass() {}
// ParentClass.prototype = 3;

// class ChildClass extends ParentClass{}

// console.log(Object.getPrototypeOf(new ParentClass()));



// class ParentClass {}
// class ChildClass extends ParentClass {}

// Printed on console
// Object.getPrototypeOf(ChildClass) === ParentClass;
// true
// Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
// true




// class SomeClass extends class {
//     constructor() {
//         console.log("Base Class")
//     }
// } {
//     constructor() {
//         super();
//         console.log("Derived Class")
//     }
// }

// Printed on console
// new SomeClass();
// Base Class
// Derived Class



// class ParentClass {
//     constructor() {
//         return 1;
//     }
// }

// class ChildClass extends ParentClass{
//     constructor() {
//         super();
//         return 1; // can't return a number
//     }
// }

// Printed on console
// console.log(new ChildClass());
// Uncaught TypeError: Derived constructors may only return object or undefined




// new (class extends null {})(); // Uncaught TypeError: Super constructor null of anonymous class is not a constructor

// new (class extends null {
//     constructor() {}
// })(); // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// new (class extends null {
//     constructor() {
//         super();
//     }
// })(); // Uncaught TypeError: Super constructor null of anonymous class is not a constructor

class NullClass extends null {
    constructor() {
        // Using new.target allows derived classes to
        // have the correct prototype chain
        return Object.create(new.target.prototype);
    }
}

// Printed on console
// const proto = Object.getPrototypeOf;
// console.log(proto(proto( new NullClass() )));
// null



// taken from: https://googlechrome.github.io/samples/classes-es6/index.html
// A base class is defined using the new reserved 'class' keyword
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
    name: string;
    height: number;
    width: number;

  constructor(height: number, width: number) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
    constructor(length: number) {
        // call the parent constructor(width, height)
        super(length, length);
        this.name = "Square";
    }

    get_area() {
        return this.height * this.width;
    }
}

const my_square = new Square(6);
console.log(my_square.get_area());



const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

Object.setPrototypeOf(Dog.prototype, Animal);

// Printed on console
// const d = new Dog("Fido");
// d.speak();
// Fido makes a noise.



class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]



// function MyObject(v) {
//     return new Object(v);
// }

// class D extends MyObject {
//     constructor(v) {
//         super(v)
//     }
// }
// console.log(new D(1) instanceof Number); // true




class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true




const CalculatorMixin = (Base) => 
    class extends Base {
        calc() {}
    };
