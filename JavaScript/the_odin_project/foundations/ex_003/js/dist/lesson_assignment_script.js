// get the DOM elements
var add_7_input = document.querySelector("#add_7_input");
var add_7_button = document.querySelector(".add_7_button");
var multiply_input_1 = document.querySelector("#multiply_input_1");
var multiply_input_2 = document.querySelector("#multiply_input_2");
var multiply_button = document.querySelector(".multiply_button");
var capitalize_input = document.querySelector(".capitalize_input");
var capitalize_button = document.querySelector(".capitalize_button");
var last_letter_input = document.querySelector(".last_letter_input");
var last_letter_button = document.querySelector(".last_letter_button");
// make the event listeners for the DOM elements
add_7_button.addEventListener("click", add_7);
multiply_button.addEventListener("click", multiply);
capitalize_button.addEventListener("click", capitalize);
last_letter_button.addEventListener("click", last_letter);
// make the functions that run when the user interacts with the DOM elements
function add_7() {
    var add_7_number = Number(add_7_input.value);
    console.log("add 7 result = " + (add_7_number + 7));
}
function multiply() {
    var number_1 = Number(multiply_input_1.value);
    var number_2 = Number(multiply_input_2.value);
    console.log("multiply result = " + number_1 * number_2);
}
function capitalize() {
    var typed_text = capitalize_input.value;
    if (!typed_text)
        return;
    var first_letter = typed_text[0];
    first_letter = first_letter.toUpperCase();
    var rest_of_text = typed_text.substring(1);
    rest_of_text = rest_of_text.toLowerCase();
    console.log("capitalize result = " + (first_letter + rest_of_text));
}
function last_letter() {
    var typed_text = last_letter_input.value;
    if (!typed_text)
        return;
    var last_typed_letter = typed_text.substring(typed_text.length - 1);
    console.log("last letter result = " + last_typed_letter);
}
