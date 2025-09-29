const obj_string = '{"name":"John", "age":30, "city":"New York"}';
const obj_object = JSON.parse(obj_string);
console.log(obj_object);
const demo_element = document.getElementById("demo");
demo_element.innerHTML = obj_object.name;
const array_str = '["Ford", "BMW", "Audi", "Fiat"]';
const array_obj = JSON.parse(array_str);
console.log(array_obj);
const date_str = '{"name": "John", "birth": "1968-12-14", "city": "New York"}';
const date_obj = JSON.parse(date_str);
date_obj.birth = new Date(date_obj.birth);
// or
// const date_obj = JSON.parse(date_str, function(key, value) {
//     if (key == "birth") {
//         return new Date(value);
//     } 
//     else {
//         return value;
//     }
// });
demo_element.innerHTML = date_obj.name + ", " + date_obj.birth;
const function_str = '{"name": "John", "age": "function () {return 30;}", "city": "New York"}';
const function_obj = JSON.parse(function_str);
function_obj.age = eval("(" + function_obj.age + ")");
demo_element.innerHTML = function_obj.name + ", " + function_obj.age();
const person_obj = { name: "John", age: 30, city: "New York" };
const string_person = JSON.stringify(person_obj);
const people = ["John", "Peter", "James", "Mathew"];
const string_people = JSON.stringify(people);
// Storing Data
const person_2_obj = { name: "John", age: 31, city: "New York" };
const string_person_2 = JSON.stringify(person_2_obj);
localStorage.setItem("testJson", string_person_2);
// Retrieving Data
let text_got = localStorage.getItem("testJson");
let obj_got = JSON.parse(text_got);
console.log(`obj_got: ${obj_got.age}`);
const num = 123e-5;
const stringfyed = JSON.stringify(num);
console.log(stringfyed);
const my_bool = true;
const stringfyed_bool = JSON.stringify(my_bool);
console.log(stringfyed_bool);
const dated_obj = { "name": "John", "today": new Date(), "city": "New York" };
const stringfyed_date = JSON.stringify(dated_obj);
console.log(stringfyed_date);
const functioned_obj = { "name": "John", "age": function () { return 40; }, "city": "New York" };
const stringfyed_function = JSON.stringify(functioned_obj);
console.log(stringfyed_function);
const functioned_obj_2 = { "name": "John", "age": function () { return 40; }, "city": "New York" };
functioned_obj_2.age = functioned_obj_2.age.toString();
const stringfyed_function_2 = JSON.stringify(functioned_obj_2);
console.log(stringfyed_function_2);
