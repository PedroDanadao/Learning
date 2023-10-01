// I'm using TypeScript and then compiling it to JavaScript. If you are seeing the code in the site, 
// then that's the reason why it appears ugly

// get the html elements
const choose_name_button = document.querySelector(".choose_name_button") as HTMLInputElement;
const choose_name_result_div = document.querySelector(".choose_name_result") as HTMLDivElement;

const x_input = document.querySelector("#x_input") as HTMLInputElement;
const y_input = document.querySelector("#y_input") as HTMLInputElement;
const width_input = document.querySelector("#width_input") as HTMLInputElement;
const height_input = document.querySelector("#height_input") as HTMLInputElement;
const color_select = document.querySelector("#colors_select") as HTMLSelectElement;
const canvas_area = document.querySelector(".canvas_area") as HTMLCanvasElement;
const draw_shape_button = document.querySelector(".draw_shape_button") as HTMLInputElement;

// make the connections(event listeners) from the html elements to the functions
choose_name_button?.addEventListener("click", choose_name);
draw_shape_button.addEventListener("click", draw_shape);

// make the functions that will be called when the user interacts with the html elements
function choose_name() {
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

    const random_number = Math.floor(Math.random() * names.length);
    const chosen_name = names[random_number];
    if (choose_name_result_div)
        choose_name_result_div.innerHTML = chosen_name;
}


function draw_shape() {
    // get the current data in the inputs of the page
    const x_value = parseInt(x_input.value);
    const y_value = parseInt(y_input.value);
    const width_value = parseInt(width_input.value);
    const height_value = parseInt(height_input.value);

    // make a list with the previous values and a list with the ones that are not numbers(NaN). 
    // Then, if the second list is not empty, alert the user of the inputs that are incorrect.
    const values_list = [x_value, y_value, width_value, height_value];
    const input_names = ["x input", "y input", "width input", "height input"];
    const nan_list : string[] = [];
    for (let i in values_list){
        let current_value = values_list[i];
        if (isNaN(current_value)){
            nan_list.push(input_names[i]);
        }
    }

    if (nan_list.length > 0){
        let problematic_inputs = '';
        for (let i in nan_list){
            problematic_inputs += nan_list[i] + "\n";
        }
        const error_message = `The following inputs don't contain a valid number:\n${problematic_inputs}\ncheck their values and try again`;
        window.alert(error_message);
        throw error_message;
    }

    // make the object to draw into the canvas and then draw using the values
    const ctx = canvas_area.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas_area.width, canvas_area.height);
    ctx.fillStyle = color_select.value;
    ctx.fillRect(x_value, y_value, width_value, height_value);
}

function assert_number(passed_value) {
    // makes sure that the value to be returned will be a number
    let value_number = Number(passed_value);

    if (isNaN(value_number))
        throw `the passed value ${passed_value} is not a number`;
    else
        return value_number
}
