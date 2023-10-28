// Get the DOM ELements
const list = document.querySelector("ul") as HTMLUListElement;
const input = document.querySelector("input") as HTMLInputElement;
const createButton = document.querySelector("button") as HTMLButtonElement;

// Make the connections
createButton.addEventListener("click", addShoppingItem);

// Create the functions
function addShoppingItem() {
    const inputText = input.value;

    if (! inputText) return;

    input.value = '';

    const listItem = document.createElement("li");
    listItem.textContent = inputText;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => list.removeChild(listItem));

    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    input.focus();
}

// Make the page startup code
