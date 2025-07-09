var MyClass = /** @class */ (function () {
    // class methods
    function MyClass() {
    }
    MyClass.prototype.method1 = function () { };
    MyClass.prototype.method2 = function () { };
    MyClass.prototype.method3 = function () { };
    return MyClass;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.say_hi = function () {
        console.log(this.name);
    };
    return User;
}());
var user = new User("John");
// Printed from console
// user.say_hi()
// John
// typeof(User)
// 'function'
var User2 = /** @class */ (function () {
    function User2(name) {
        this.name = '';
        this.name = name;
    }
    User2.prototype.sai_hi = function () {
        console.log(this.name);
    };
    return User2;
}());
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
var user_3 = new User3("John");
// user_3.sayHi();
var User4 = /** @class */ (function () {
    function User4() {
    }
    return User4;
}());
// Printed on console
// typeof User4
// 'function'
// User4()
// undefined // because of typescript to javascript conversion
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.prototype.say_hi = function () {
        console.log("Hello!");
    };
    return User5;
}());
var User6 = /** @class */ (function () {
    function OtherClass() {
    }
    OtherClass.prototype.say_hi = function () {
        console.log(OtherClass);
    };
    return OtherClass;
}());
// Printed on console
// new User6().say_hi()
// ƒ OtherClass() {
//     }
// console.log(OtherClass)
// Uncaught ReferenceError: OtherClass is not defined
// at <anonymous>:1:13
function make_class(phrase) {
    return /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.say_hi = function () {
            console.log(phrase);
        };
        return class_1;
    }());
}
var class_made = make_class("Hello");
// Printed on console
// new class_made().say_hi();
// Hello
