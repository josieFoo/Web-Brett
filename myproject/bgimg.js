const body = document.querySelector("body");

const howManyImages = 10;
//https://unsplash.com/
function showImages(imgNum) {
    const images = document.createElement("img");
    //const images = new Image();
    images.src = ` images/${imgNum}.jpg `;
    images.classList.add("bgImg");
    body.appendChild(images);
}

//function handleImgLoad() {}

function genRandomInt() {
    const number = Math.floor(Math.random() * howManyImages);
    return number;
}

function init() {
    const randomNumber = genRandomInt();
    showImages(randomNumber);
}

init();