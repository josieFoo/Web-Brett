const boardForm = document.querySelector(".JS_BOARD");
const boardInput = boardForm.querySelector("input");
const boardList = document.querySelector(".JS_LIST");
const items_localStorage = "items"; // 'items' is key name of localStorage

let items = []; // 'items' is a empty array

function loadItems() {
    const loadedItems = localStorage.getItem(items_localStorage);
    if (loadedItems !== null) {
        const parsedItems = JSON.parse(loadedItems);
        parsedItems.forEach(function(item) {
            makeItems(item.text);
        });
    }
}

function saveItems() {
    localStorage.setItem(items_localStorage, JSON.stringify(items));
}

/*
function filterF(item) {
    return item.id === 1;
}
*/

function deleteItem(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    boardList.removeChild(li);
    const clearItems = items.filter(function(item) {
        return item.id !== parseInt(li.id);
    });
    items = clearItems;
    saveItems();
}

function makeItems(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✔";
    deleteButton.addEventListener("click", deleteItem);
    const span = document.createElement("span");
    const newItemId = items.length + 1; //index for item for future
    span.innerText = text; //input into span
    boardList.appendChild(li);
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.id = newItemId; //<li id="?">
    const itemsObj = {
        text: text,
        id: newItemId
    };
    items.push(itemsObj);
    saveItems();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = boardInput.value;
    makeItems(currentValue);
    //after Enter create item and do not show input anymore
    boardInput.value = "";
}

function init() {
    loadItems();
    boardForm.addEventListener("submit", handleSubmit);
}

init();