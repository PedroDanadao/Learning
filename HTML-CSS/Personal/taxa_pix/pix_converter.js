const value_input = window.document.getElementById("input_value");
const value_paragraph = window.document.getElementById("value_paragraph")

const taxes_table = {
    "100": 1,
    "1000": 2,
    "10000": 5,
    "100000": 7
}

function set_right_value(){
    // get the value in the value_input element
    const input_value_number = get_input_value();

    // set the new value of the value_input element to be the input_value_number with the cents
    value_input.value = input_value_number.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
}

function show_new_value(){
    /**
     * shows the new value to the user in the value paragraph
     */
    // get the value in the value input element
    const input_value_number = get_input_value();

    // get the tax based on the input number
    const tax = get_tax_from_value(input_value_number);

    console.log(tax);

    // calculate how much the final value will have to be to get the input value from the transaction after the tax discount
    const diff = 100 - tax;
    const final_value = (input_value_number * 100) / diff;

    // make the final value string that will be shown in the value paragraph
    const final_value_string = final_value.toLocaleString("pt-br", {style: "currency", currency: "BRL"});

    value_paragraph.innerHTML = `O valor da transferência é de: <strong>${final_value_string}</strong>`;
}

function get_input_value(){
    /**
     * Returns the Number value that is typed in the value_input element by removing any non numeric character
     * from it and dividing by 100
     */
    // get the current value in the value_input element and remove any dots and commas from it
    let input_value_text = value_input.value;
    input_value_text = input_value_text.replace(/[^0-9]/g, '');

    // get the number from the input_value_text and divide it by 100 to get the cents of the input value
    const input_value_number = Number(input_value_text) / 100;

    return input_value_number;
}

function get_tax_from_value(transfer_value){
    /**
     * Returns the tax value to be paid based on the passed transfer_value and the taxes table. 
     * If the value is between 100 and 10000, for example, the tax value to be returned will be 2.
     */
    let table_value = 100;
    let table_tax = 1;
    for (const[key, value] of Object.entries(taxes_table)){
        table_value = Number(key);
        table_tax = value;

        if (transfer_value < table_value){
            return table_tax;
        }
    }
    return table_tax;
}
