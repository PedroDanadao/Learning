// get the DOM elements
const add_7_input = document.querySelector("#add_7_input") as HTMLInputElement;
const add_7_button = document.querySelector(".add_7_button") as HTMLButtonElement;

const multiply_input_1 = document.querySelector("#multiply_input_1") as HTMLInputElement;
const multiply_input_2 = document.querySelector("#multiply_input_2") as HTMLInputElement;
const multiply_button = document.querySelector(".multiply_button") as HTMLButtonElement;

const capitalize_input = document.querySelector(".capitalize_input") as HTMLInputElement;
const capitalize_button = document.querySelector(".capitalize_button") as HTMLButtonElement;

const last_letter_input = document.querySelector(".last_letter_input") as HTMLInputElement;
const last_letter_button = document.querySelector(".last_letter_button") as HTMLButtonElement;

// make the event listeners for the DOM elements
add_7_button.addEventListener("click", add_7);
multiply_button.addEventListener("click", multiply);
capitalize_button.addEventListener("click", capitalize);
last_letter_button.addEventListener("click", last_letter);

// make the functions that run when the user interacts with the DOM elements
function add_7() {
    const add_7_number = Number(add_7_input.value);

    console.log(`add 7 result = ${add_7_number + 7}`);
}

function multiply() {
    const number_1 = Number(multiply_input_1.value);
    const number_2 = Number(multiply_input_2.value);

    console.log(`multiply result = ${number_1 * number_2}`);
}

function capitalize() {
    const typed_text = capitalize_input.value;

    if (! typed_text) return;

    let first_letter = typed_text[0];
    first_letter = first_letter.toUpperCase();
    let rest_of_text = typed_text.substring(1);
    rest_of_text = rest_of_text.toLowerCase();

    console.log(`capitalize result = ${first_letter + rest_of_text}`);
}

function last_letter() {
    const typed_text = last_letter_input.value;
    
    if (! typed_text) return;

    const last_typed_letter = typed_text.substring(typed_text.length - 1);
    console.log(`last letter result = ${last_typed_letter}`);
}
