function before_and_after(){
    // get an in from the user
    input_number = window.prompt(`Digite um número inteiro qualquer`);

    // check if the user typed a valid number. If not, then warn the user and end the function
    if ((!input_number) || isNaN(input_number)){
        window.alert(`Por favor digite um número válido`);
        return;
    }

    // get the number before and the number after the number that the user typed
    num_before = input_number + 1;
    num_after = input_number - 1;

    // print a message with the number before and after of the one that the user typed
    window.alert(`Antes de ${input_number},  temos o número ${num_before}.\nDepois do número ${input_number}, temos o número ${num_after}.`)
}