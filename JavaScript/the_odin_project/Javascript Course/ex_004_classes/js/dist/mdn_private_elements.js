class MyClass {
    constructor(variable) {
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
class ClassWithPrivateField {
    #private_field;
    constructor() {
        delete this.#private_field;
        this.#undeclared_private_field = 42;
    }
}
const instance = new ClassWithPrivateField();
instance.#private_field;
