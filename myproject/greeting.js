const form = document.querySelector(".JS_FORM");
const input = form.querySelector("input");
const greeting = document.querySelector(".JS_GREETINGS");

const userLocalStorage = "currentUser";
const showingClassName = "showing";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    doGreetings(currentValue);
    saveName(currentValue);
    //input name saved in the localstorage
    //if not, will be asked again after refresh
}

function askForName() {
    form.classList.add(showingClassName);
    form.addEventListener("submit", handleSubmit);
}

function doGreetings(text) {
    form.classList.remove(showingClassName); //do not show my form anymore
    greeting.classList.add(showingClassName); //show me greeting
    greeting.innerText = `Hello, ${text}. It's a wonderful day.`;
}

function loadName() {
    const currentUser = localStorage.getItem(userLocalStorage);
    if (currentUser === null) {
        askForName();
    } else {
        doGreetings(currentUser);
    }
}

function saveName(text) {
    localStorage.setItem(userLocalStorage, text);
}

function init() {
    loadName();
}

init();