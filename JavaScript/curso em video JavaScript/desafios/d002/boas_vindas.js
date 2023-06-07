function meeting_user(){
    // get the user name using the window prompt
    user_name = window.prompt("Qual é o seu nome?");

    // if the user typed nothing in the window prompt. If not, then display a message warning about it and end the function
    if (! user_name){
        window.alert("Por favor digite um nome válido");
        return;
    }
    
    // get the age of the user
    user_age = window.prompt(`Olá ${user_name}! Quantos anos você tem?`);

    // if the user typed nothing for the age, then warn the user and end the function
    if (! user_age){
        window.alert("Por favor digite uma idade válida");
        return;
    }

    // now alert the user with the greeting message
    window.alert(`Acabei de conhecer ${user_name}, que tem ${user_age} anos de idade!`);
}