// get the HTML elements
const VALUE_INPUT = window.document.getElementById("input_value");
const VALUE_PARAGRAPH = window.document.getElementById("value_paragraph");
const TAX_EXPLANATION_PARAGRAPH = window.document.getElementById("tax_explanation");

// add an event to check if the enter key has been pressed in the value input
VALUE_INPUT.addEventListener("keydown", check_enter_pressed);

// make a constant for the minimum tax value and an object that will serve as a table for the taxes and the values that need to be checked
const INITIAL_VALUE = 0.25;
const TAXES_TABLE = {
    "100": 1,
    "1000": 2,
    "10000": 5,
    "100000": 7
}

function set_right_value(){
    // get the value in the VALUE_INPUT element
    const input_value_number = get_input_value();

    // set the new value of the VALUE_INPUT element to be the input_value_number with the cents
    VALUE_INPUT.value = input_value_number.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
}

function show_new_value(){
    /**
     * shows the new value to the user in the value paragraph
     */
    // get the value in the value input element
    const input_value_number = get_input_value();
    
    // get the tax based on the input number
    const tax = get_tax_from_value(input_value_number);
    
    // console.log(tax);
    
    // calculate how much the final value will have to be to get the input value from the transaction after the tax discount
    const diff = 100 - tax;
    let final_value = (input_value_number * 100) / diff;

    // make the final value string that will be shown in the value paragraph
    const final_value_string = final_value.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    VALUE_PARAGRAPH.innerHTML = `O valor da transferência é de: <strong>${final_value_string}</strong>`;
    
    // make the the value strings for the explanation of why the final value is what it is
    const input_value_currency_string = input_value_number.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    };
    final_value = Number(final_value.toFixed(2));
    const final_value_decimals = final_value.toLocaleString("pt-br", options);
    const final_value_one_percent = (final_value / 100).toLocaleString("pt-br", options);
    const fv_times_tax = (final_value * tax / 100).toLocaleString("pt-br", options);
    const final_value_explained = (final_value - (final_value * tax / 100)).toLocaleString("pt-br", options);

    // make the text that explains to the user why the final value will be that
    TAX_EXPLANATION_PARAGRAPH.innerHTML = `Com o valor de ${input_value_currency_string} a taxa pix é de ${tax}%. Então para que você possa receber ou enviar o valor de ${input_value_currency_string} após as taxas, é preciso que a transferência seja de ${final_value_string}. Fazendo as contas, vemos que: <br>1% de ${final_value_decimals} = ${final_value_one_percent} <br>${final_value_one_percent} x ${tax} = ${fv_times_tax} <br>${final_value_decimals} - ${fv_times_tax} = ${final_value_explained}`;
}

function get_input_value(){
    /**
     * Returns the Number value that is typed in the VALUE_INPUT element by removing any non numeric character
     * from it and dividing by 100
     */
    // get the current value in the VALUE_INPUT element and remove any character that is not a number
    let input_value_text = VALUE_INPUT.value;
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
    let table_tax = INITIAL_VALUE;
    for (const[key, value] of Object.entries(TAXES_TABLE)){
        table_value = Number(key);
        
        if (transfer_value < table_value){
            return table_tax;
        }
        table_tax = value;
    }
    return table_tax;
}

function check_enter_pressed(press_event){
    if (press_event.keyCode == 13){
        show_new_value();
    }
}
