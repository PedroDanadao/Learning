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
function hello(my_string) {
    console.log(my_string);
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
function ParentClass() { }
ParentClass.prototype = 3;
class ChildClass extends ParentClass {
}
