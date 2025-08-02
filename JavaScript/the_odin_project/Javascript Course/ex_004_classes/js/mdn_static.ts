class ClassWithStaticMethod {
    static static_property = "some value";
    static static_method() {
        return "static method has been called";
    }

    static {
        console.log("Class static initialization block called");
    }
}

console.log(ClassWithStaticMethod.static_property);
console.log(ClassWithStaticMethod.static_method());

// printed on console
// Class static initialization block called
// some value
// static method has been called


class ClassWithStatic {
    static static_field;
    static static_field_with_initializer = "some value";
    static static_method() {
        // ...
    }
}




class ClassWithStaticField {
    static static_field;
    static static_field_with_initializer = "static_field";
}

class SubclassWithStaticField extends ClassWithStaticField {
    static sub_static_field = "subclass_field";
}

// printed on console
console.log(Object.hasOwn(ClassWithStaticField, "static_field")); // true
console.log(ClassWithStaticField.static_field); // undefined
console.log(ClassWithStaticField.static_field_with_initializer); // static_field
console.log(SubclassWithStaticField.static_field_with_initializer); // static_field
console.log(SubclassWithStaticField.sub_static_field); // subclass_field


class ClassWithStaticField2 {
    static base_static_field = "base static field";
    static another_base_static_field = this.base_static_field;

    static base_static_method() {
        return "base static method output";
    }
}

class SubclassWithStaticField2 extends ClassWithStaticField2 {
    static sub_static_field = this.base_static_method();
}

// printed on console
console.log(ClassWithStaticField2.base_static_field); // base static field
console.log(SubclassWithStaticField2.sub_static_field); // base static method output




class Triple {
    static custom_name = "Tripler";
    static description = "I triple any number you give me";
    
    static calculate(n=1) {
        return n * 3;
    }
}


class SquaredTriple extends Triple {
    static long_description;
    static description = "I Square the triple of any number you give me";

    static calculate(n=1) {
        const tripled_number = super.calculate(n);
        return tripled_number * tripled_number;
    }
}

console.log(Triple.description); // I triple any number you give me
console.log(Triple.calculate()) // 3
console.log(Triple.calculate(6)) // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3)) // 81
console.log(SquaredTriple.description) // I Square the triple of any number you give me
console.log(SquaredTriple.long_description) // undefined
console.log(SquaredTriple.custom_name) // Tripler

// This throws because calculate() is a static member, not an instance member.
// console.log(tp.calculate()); // Uncaught TypeError: tp.calculate is not a function


class StaticMethodCall {
    static static_property = "static_property"

    static static_method() {
        return `Static method and ${this.static_property} has been called`;
    }

    static another_static_method() {
        return `${this.static_method()} from another static method`;
    }
}

// printed on console
console.log(StaticMethodCall.static_method()); // Static method and static_property has been called
console.log(StaticMethodCall.another_static_method()); // Static method and static_property has been called from another static method



class StaticMethodCall2 {
    constructor() {
        console.log(StaticMethodCall2.static_property);
        console.log(this.constructor.static_property);
        console.log(StaticMethodCall2.static_method());
        console.log(this.constructor.static_method());
    }

    static static_property = "static_property";
    static static_method() {
        return "static method has been called";
    }
}

// printed on console
const smc2 = new StaticMethodCall2();
// static_property
// static_property
// static method has been called
// static method has been called