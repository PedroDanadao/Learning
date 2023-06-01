function calcula_troco(){
    // get the product from the user
    product_name = window.prompt(`Que produto você está comprando?`);

    // check if the user typed nothing. If nothing was typed, then warn the user and end the function
    if (! product_name){
        window.alert("Por favor, digite um produto válido");
        return;
    }

    // get the value of the product from the user and the amount he will pay for it. Also replace any comma for a point in the strings
    product_value = window.prompt(`Quanto custa ${product_name} que você está comprando?`);
    payment = window.prompt(`Qual o valor que você deu para ${product_name}`);

    product_value = product_value.replace(',', '.')
    payment = payment.replace(',', '.')

    // check if the user typed valid numbers. If not, then warn the user and end the method
    if (!(valid_number(product_value) && valid_number(payment))){
        window.alert("Por favor, digite valores válidos para o produto e o pagamento");
    }

    // convert the product_value and payment to Numbers
    product_value = Number(product_value);
    payment = Number(payment);

    // check if the product value is greater that the payment. If so, then warn the user and end the method
    if (product_value > payment){
        window.alert("Produto com custo maior que o pagamento");
        return;
    }

    // get the difference between the payment and the product_value(change)
    change = payment - product_value;

    // convert the values to a currency string and print the message with that currency string
    product_value_currency = product_value.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    payment_currency = payment.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    change_currency = change.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

    window.alert(`Você  comprou ${product_name} que custou ${product_value_currency}.\nDeu ${payment_currency} em dinheiro e vai receber ${change_currency} de troco.\nVolte Sempre!`)
}

function valid_number(num_str){
    return num_str && ! isNaN(num_str);
}
