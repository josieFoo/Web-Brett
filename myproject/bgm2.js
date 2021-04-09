const secondPlayer = document.querySelector(".JS_BGM2");
const selectMusic = document.getElementById("selectMusic");

//console.log(secondPlayer);
//console.log(selectMusic);

function handleChange(event) {
    //event.preventDefault();
    var i = selectMusic.selectedIndex;
    //console.log(i);
}


function loadMusic() {
    secondPlayer.addEventListener("onchange", handleChange);
}

function init() {
    loadMusic();
}
init();