const musicForm = document.querySelector(".JS_BGM");

const musicInput = musicForm.querySelector("audio");

const howManySongs = 5;
const playList = {
    0: "Beatcore & Ashley Apollodor - Burning Bridges [NCS Release].mp3",
    1: "Cadium - Change Your Mind [NCS Release].mp3",
    2: "Culture Code - Fairytale (feat. Amanda Collis) [NCS Release].mp3",
    3: "it's different - Outlaw (feat. Miss Mary) [NCS Release].mp3",
    4: "NIVIRO ft. PollyAnna - Fast Lane [NCS Release].mp3"
};

function playBgm(songNum) {
    musicInput.innerHTML = `<source src="music/${playList[songNum]}" type="audio/mpeg" />`;



}

function genRandomInt() {
    const number = Math.floor(Math.random() * howManySongs);

    return number;
}

function init() {
    const randomNumber = genRandomInt();
    playBgm(randomNumber);
}

init();