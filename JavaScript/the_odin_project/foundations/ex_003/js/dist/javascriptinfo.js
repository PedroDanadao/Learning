// get the DOM elements
var arrow_function_button = document.querySelector(".arrow_function_rewrite_button");
// make the events that are triggered when the user interacts with the ui
arrow_function_button.addEventListener("click", arrow_function_rewrite);
// make the functions that will run when the events are triggered
function arrow_function_rewrite() {
    var question = function (quest_text) { return confirm(quest_text); };
    var yes = function () { return alert("You agreed"); };
    var no = function () { return alert("You canceled the execution."); };
    var ask = function () { return question("Do you agree?") ? yes() : no(); };
    ask();
}
