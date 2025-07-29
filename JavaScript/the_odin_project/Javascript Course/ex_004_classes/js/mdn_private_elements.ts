class MyClass {
    constructor(variable: number) {
        console.log(variable);
    }
}

class ClassWithPrivate {
    #private_field;
    #private_field_with_initializer = 42;

    #private_method() {
        // ...
    }

    static #private_static_field;
    static #private_static_field_with_initializer = 42;

    static #private_static_method() {
        // ...
    }
}


// class ClassWithPrivateField {
//     #private_field;

//     constructor() {
//         delete this.#private_field; // Syntax error
//         this.#undeclared_private_field = 42; // Syntax error
//     }
// }

// const instance = new ClassWithPrivateField();
// instance.#private_field; // Syntax error


class C {
    #x: any;

    static get_x(obj: C) {
        return obj.#x;
    }
}

console.log( C.get_x(new C()) ); // undefined
// console.log(C.get_x({})) // Uncaught TypeError: Cannot read private member #x from an object whose class did not declare it


class D {
    #x: any;

    constructor(x: any) {
        this.#x = x;
    }

    static get_x(obj: D) {
        if (#x in obj) return obj.#x;

        return "obj must be an instance of D"
    }
}

console.log( D.get_x(new D("foo")) ); // "foo"
console.log( D.get_x(new D(3.14)) ); // 3.14
console.log( D.get_x(new D(new Date())) ); // the current date and time
console.log( D.get_x({}) ); // "obj must be an instance of D"


class ClassWithPrivateField {
    #private_field;

    constructor() {
        this.#private_field = 42;
    }
}

class Subclass extends ClassWithPrivateField {
    #sub_private_field;

    constructor() {
        super();
        this.#sub_private_field = 23;
    }
}

// printed on console
// new Subclass();
// Subclass {#private_field: 42, #sub_private_field: 23}



class Stamper extends class {
    // A base class whose constructor returns the object it's given
    constructor(obj: any) {
        return obj;
    }
} {
    // This declaration will "stamp" the private field onto the object
    // returned by the base class constructor
    #stamp = 42;
    static get_stamp(obj) {
        return obj.#stamp;
    }
}

const obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

// printed on console
// console.log(obj)
// {#stamp: 42}
// console.log(Stamper.get_stamp(obj));
// 42
// console.log(obj instanceof Stamper);
// false

// You cannot stamp private elements twice
// new Stamper(obj); // Error: Initializing an object twice is an error with private fields


// class ClassWithPrivateStaticField {
//     static #private_static_field = 42;

//     static public_static_method() {
//         return ClassWithPrivateStaticField.#private_static_field;
//     }
// }

// console.log(ClassWithPrivateStaticField.public_static_method()); // 42


class ClassWithPrivateStaticField {
    static #private_static_field = 42;

    static public_static_method() {
        return ClassWithPrivateStaticField.#private_static_field;
    }
}

class Subclass2 extends ClassWithPrivateStaticField {
    static call_super_method() {
        return super.public_static_method();
    }
}

// Subclass2.public_static_method(); // Uncaught TypeError: Cannot read private member #private_static_field from an object whose class did not declare it
// Subclass2.call_super_method(); // Uncaught TypeError: Cannot read private member #private_static_field from an object whose class did not declare it



class ClassWithPrivateMethod {
    #private_method() {
        return 42;
    }

    public_method() {
        return this.#private_method();
    }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.public_method()); // 42


class ClassWithPrivateAccessor {
    #message;

    get #decorated_message() {
        return `🎬${this.#message}🛑`;
    }
    set #decorated_message(message) {
        this.#message = message;
    }

    constructor() {
        this.#decorated_message = "hello world";
        console.log(this.#decorated_message);
    }
}

new ClassWithPrivateAccessor();


class E {
    #method() {}

    static get_method(x) {
        return x.#method;
    }
}

console.log( E.get_method(new E()) ); // ƒ #method() { }
// console.log( E.get_method(E.prototype) ); // Uncaught TypeError: Receiver must be an instance of class E



class ClassWithPrivateStaticMethod {
    static #private_static_method() {
        return 42;
    }

    static public_static_method() {
        return this.#private_static_method();
    }
}

class Subclass3 extends ClassWithPrivateStaticMethod {}

// console.log( Subclass3.public_static_method() ); // Uncaught TypeError: Receiver must be class ClassWithPrivateStaticMethod



class PrivateConstructor {
    static #is_internal_constructing = false;

    constructor() {
        if (!PrivateConstructor.#is_internal_constructing) {
            throw new TypeError("PrivateConstructor is not constructable");
        }

        PrivateConstructor.#is_internal_constructing = false;
    }

    static create() {
        PrivateConstructor.#is_internal_constructing = true;
        const instance = new PrivateConstructor();
        return instance;
    }
}


// new PrivateConstructor(); // mdn_private_elements.js:159 Uncaught TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}
