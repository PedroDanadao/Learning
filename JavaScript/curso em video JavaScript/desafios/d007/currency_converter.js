// get the current value of the dollar from the user
let current_dollar_value = window.prompt("Antes de mais nada. Quanto está a cotação do dolar agora?");
// let current_dollar_value = "5";

function check_current_value(cv_string) {
    return cv_string && !isNaN(cv_string);
}

// make a while loop that will prompt the user to type a valid current value while the user keeps typing an invalid value
while (!check_current_value(current_dollar_value)) {
    window.alert("Digite um valor válido para o dolar");
    current_dollar_value = window.prompt("Quanto está a cotação do dolar agora?");
}

const content = document.getElementById("content");

// create the elements that will be displayed in the index page
const main_title = document.createElement("h1");
const button = document.createElement("button");
const paragraph = document.createElement("p");

// change the HTMLs of the created elements so that they have the right text in the page
main_title.innerHTML = "Conversor R$ &rarr; US$";
button.innerHTML = "Converter";
paragraph.innerHTML = "Clique no botão acima para iniciar.";

// call the convert to dollar function when the created button is pressed
button.addEventListener("click", convert_to_dollar);

// add the created elements in the index page
content.appendChild(main_title);
content.appendChild(button);
content.appendChild(paragraph);


function convert_to_dollar() {
    // get the amount of money the user has. Keep asking it until the user types a valid number
    let user_money = window.prompt("Quantos R$ você tem na carteira?");
    // let user_money = '2';
    while (!check_current_value(user_money)) {
        window.alert("Digite um valor válido para o quanto você tem");
        user_money = window.prompt("Quantos R$ você tem na carteira?");
    }

    // convert the type of the current_dollar_value variable to a Number, divide it to the current_dollar_value
    current_dollar_value = Number(current_dollar_value);
    user_money = Number(user_money);
    let value_in_dollars = user_money / current_dollar_value;

    // change the text in the paragraph to display the value that the user has in dollars
    const value_in_dollars_string = value_in_dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    const user_money_string = user_money.toLocaleString("pt-br", {style:"currency", currency:"BRL"});
    paragraph.innerHTML = `Com o valor de ${user_money_string} você consegue comprar ${value_in_dollars_string}`;
}
