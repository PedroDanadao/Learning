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
// make the connections(event listeners) from the html elements to the functions
choose_name_button === null || choose_name_button === void 0 ? void 0 : choose_name_button.addEventListener("click", choose_name);
draw_shape_button.addEventListener("click", draw_shape);
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
        var error_message = "The following inputs don't contain a valid number:\n" + problematic_inputs + "check their values and try again";
        window.alert(error_message);
        throw error_message;
    }
    // make the object to draw into the canvas and then draw using the values
    var ctx = canvas_area.getContext("2d");
    ctx.clearRect(0, 0, canvas_area.width, canvas_area.height);
    ctx.fillStyle = color_select.value;
    ctx.fillRect(x_value, y_value, width_value, height_value);
}
function assert_number(passed_value) {
    // makes sure that the value to be returned will be a number
    var value_number = Number(passed_value);
    if (isNaN(value_number))
        throw "the passed value " + passed_value + " is not a number";
    else
        return value_number;
}
