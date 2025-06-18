// Get the DOM ELements
var list = document.querySelector("ul");
var input = document.querySelector("input");
var createButton = document.querySelector("button");
// Make the connections
createButton.addEventListener("click", addShoppingItem);
// Create the functions
function addShoppingItem() {
    var inputText = input.value;
    if (!inputText)
        return;
    input.value = '';
    var listItem = document.createElement("li");
    listItem.textContent = inputText;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () { return list.removeChild(listItem); });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.focus();
}
// Make the page startup code
