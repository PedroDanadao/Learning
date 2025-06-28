console.log("It Works!");
var first = "wes";
var second = "bos";
var age = 100;
function say_hi() {
    console.log("HI!"); // ok
}
var age_2 = 100;
function go() {
    var hair = "blonde";
    var age = 200;
    console.log(hair);
    console.log(age);
}
console.log(age_2);
go();
// console.log(hair);
var cool;
if (1 === 1) {
    var cool_1 = true;
}
console.log(cool);
function is_cool(name) {
    var cool;
    if (name === "wes") {
        cool = true;
    }
    console.log(cool);
    return cool;
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var dog = 'snickers';
function logDog() {
    console.log(dog);
}
function go() {
    var dog = 'sunny';
    logDog();
}
go();
