// get the DOM elements
const arrow_function_button = document.querySelector(".arrow_function_rewrite_button") as HTMLButtonElement;


// make the events that are triggered when the user interacts with the ui
arrow_function_button.addEventListener("click", arrow_function_rewrite);

// make the functions that will run when the events are triggered
function arrow_function_rewrite() {
    let question = (quest_text: string) => confirm(quest_text);
    let yes = () => alert("You agreed");
    let no = () => alert("You canceled the execution.");


    let ask = () => question("Do you agree?") ? yes() : no();

    ask();
}
