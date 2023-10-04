// I'm using TypeScript and then compiling it to JavaScript. If you are seeing the code in the site, 
// then that's the reason why it appears ugly
// get the html elements
var choose_name_button = document.querySelector(".choose_name_button");
var choose_name_result_div = document.querySelector(".choose_name_result");
var x_input = document.querySelector("#x_input");
var y_input = document.querySelector("#y_input");
var width_input = document.querySelector("#width_input");
var height_input = document.querySelector("#height_input");
var color_select = document.querySelector("#colors_select");
var canvas_area = document.querySelector(".canvas_area");
var draw_shape_button = document.querySelector(".draw_shape_button");
var names_list_input = document.querySelector(".names_list_input");
var random_input_1 = document.querySelector("#random_input_1");
var random_input_2 = document.querySelector("#random_input_2");
var choose_name_result_2 = document.querySelector(".choose_name_result_2");
var choose_name_button_2 = document.querySelector(".choose_name_button_2");
var short_names_result_div = document.querySelector(".short_names_result");
var short_names_button = document.querySelector(".short_names_button");
// make the connections(event listeners) from the html elements to the functions
choose_name_button === null || choose_name_button === void 0 ? void 0 : choose_name_button.addEventListener("click", choose_name);
draw_shape_button.addEventListener("click", draw_shape);
choose_name_button_2.addEventListener("click", choose_name_2);
short_names_button.addEventListener("click", show_short_names);
// make the functions that will be called when the user interacts with the html elements
function choose_name() {
    var names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    var random_number = Math.floor(Math.random() * names.length);
    var chosen_name = names[random_number];
    if (choose_name_result_div)
        choose_name_result_div.innerHTML = chosen_name;
}
function draw_shape() {
    // get the current data in the inputs of the page
    var x_value = parseInt(x_input.value);
    var y_value = parseInt(y_input.value);
    var width_value = parseInt(width_input.value);
    var height_value = parseInt(height_input.value);
    // make a list with the previous values and a list with the ones that are not numbers(NaN). 
    // Then, if the second list is not empty, alert the user of the inputs that are incorrect.
    var values_list = [x_value, y_value, width_value, height_value];
    var input_names = ["x input", "y input", "width input", "height input"];
    var nan_list = [];
    for (var i in values_list) {
        var current_value = values_list[i];
        if (isNaN(current_value)) {
            nan_list.push(input_names[i]);
        }
    }
    if (nan_list.length > 0) {
        var problematic_inputs = '';
        for (var i in nan_list) {
            problematic_inputs += nan_list[i] + "\n";
        }
        var error_message = "The following inputs don't contain a valid number:\n" + problematic_inputs + "\ncheck their values and try again";
        window.alert(error_message);
        throw error_message;
    }
    // make the object to draw into the canvas and then draw using the values
    var ctx = canvas_area.getContext("2d");
    ctx.clearRect(0, 0, canvas_area.width, canvas_area.height);
    ctx.fillStyle = color_select.value;
    ctx.fillRect(x_value, y_value, width_value, height_value);
}
function random_interval(num_1, num_2) {
    // returns a random number between the maximum and minimum number intervals
    var max_value = Math.max(num_1, num_2);
    var min_value = Math.min(num_1, num_2);
    return Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
}
function choose_name_2() {
    // check if the names list is empty. If so, then alert the user and throw an error
    if (!names_list_input.value) {
        window.alert("The names list is empty. Add some names separated by a comma and space and try again");
        throw "The names list is empty. Add some names separated by a comma and space and try again";
    }
    var names_list_string = names_list_input.value;
    names_list_string = names_list_string.replace(/, /g, "*-*-*-*-*");
    names_list_string = names_list_string.replace(/,/g, "*-*-*-*-*");
    var names_list = names_list_string.split("*-*-*-*-*");
    names_list.filter(removeValue);
    var random_value_1 = parseInt(random_input_1.value);
    var random_value_2 = parseInt(random_input_2.value);
    if (isNaN(random_value_1)) {
        window.alert("The value of the first random number is not valid. Type a valid number for both and try again");
        throw "The value of the first random number is not valid. Type a valid number for both and try again";
    }
    if (isNaN(random_value_2)) {
        window.alert("The value of the second random number is not valid. Type a valid number for both and try again");
        throw "The value of the second random number is not valid. Type a valid number for both and try again";
    }
    // get the maximum value of both random values and the minimum value between the max and the length of the names list
    var max_random = Math.max(random_value_1, random_value_2);
    max_random = Math.min(names_list.length, max_random);
    var min_random = Math.min(random_value_1, random_value_2);
    min_random = Math.max(min_random, 1);
    // get the random number between the specified numbers and print the name in the position of the resulting random number
    var generated_random = random_interval(min_random, max_random);
    choose_name_result_2.innerText = names_list[generated_random - 1];
}
function removeValue(value, index, arr) {
    // If the value at the current array index matches the specified value (2)
    if (value === '') {
        // Removes the value from the original array
        arr.splice(index, 1);
        return true;
    }
    return false;
}
function show_short_names() {
    var names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    var shortNames = names.filter(function (name) { return name.length < 5; });
    short_names_result_div.innerHTML = shortNames.join(',');
}
// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
// const para = document.createElement('p');
// function isShort(name) {
//   return name.length < 5;
// }
// const shortNames = names.filter(isShort);
// para.textContent = shortNames;
