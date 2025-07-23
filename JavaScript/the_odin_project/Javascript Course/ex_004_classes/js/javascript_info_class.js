class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}
class User {
    constructor(name) {
        this.name = name;
    }
    say_hi() {
        console.log(this.name);
    }
}
let user = new User("John");
// Printed from console
// user.say_hi()
// John
// typeof(User)
// 'function'
class User2 {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    sai_hi() {
        console.log(this.name);
    }
}
// Printed from console
// typeof User2
// 'function'
// User2 === User2.prototype.constructor
// true
// Object.getOwnPropertyNames(User2.prototype)
// (2) ['constructor', 'sai_hi']
// alert(User2.prototype.sai_hi) // will show the function in the alert area
// rewriting class User in pure functions
// 1. Create constructor function
function User3(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// 2. Add the method to prototype
User3.prototype.sayHi = function () {
    console.log(this.name);
};
// Usage:
let user_3 = new User3("John");
// user_3.sayHi();
class User4 {
    constructor() { }
}
// Printed on console
// typeof User4
// 'function'
// User4()
// undefined // because of typescript to javascript conversion
let User5 = class {
    say_hi() {
        console.log("Hello!");
    }
};
let User6 = class OtherClass {
    say_hi() {
        console.log(OtherClass);
    }
};
// Printed on console
// new User6().say_hi()
// ƒ OtherClass() {
//     }
// console.log(OtherClass)
// Uncaught ReferenceError: OtherClass is not defined
// at <anonymous>:1:13
function make_class(phrase) {
    return class {
        say_hi() {
            console.log(phrase);
        }
    };
}
let class_made = make_class("Hello");
// Printed on console
// new class_made().say_hi();
// Hello
class User7 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            // alert("Name is too short;");
            console.log("Name is too short;");
            return;
        }
        this._name = value;
    }
}
// Printed on console
// let user_7 = new User7("Charles");
// console.log(user_7.name);
// Charles
// let user_7_2 = new User7("");
// Name is too short;
class UserComputed {
    ["say" + '_' + "hi"]() {
        console.log("hello");
    }
}
// Printed on console
// new UserComputed().say_hi();
// hello
// Basic class syntax:
// class MyClass {
//   prop = value; // property
//   constructor(...) { // constructor
//     // ...
//   }
//   method(...) {} // method
//   get something(...) {} // getter method
//   set something(...) {} // setter method
//   [Symbol.iterator]() {} // method with computed name (symbol here)
//   // ...
// }
//# sourceMappingURL=javascript_info_class.js.map