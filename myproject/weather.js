const coords = "coords";
const lang = "lang";
const API_KEY = "e90efe2286c67c96bd355f16aed00f16";
const weather = document.querySelector(".JS_WEATHER");
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}
//https://openweathermap.org/current

function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=de`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            const sky = json.weather[0].description;
            //console.log(temperature, sky, place);
            //weather.innerText = `${temperature}°C  ${sky} @ "${place} `;
            weather.innerHTML = temperature + " °C, " + sky + " @ " + place;
        });
}

function getLanguage() {

}

function ask4Coords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function handleGeoSucess(position) {
    const latitude = (position.coords.latitude);
    const longitude = (position.coords.longitude);
    const coordObj = {
        latitude: latitude,
        longitude: longitude
    };
    //const langObj = {
    //    lang: de
    //}
    saveCoords(coordObj);
    //saveLanguage(langObj);
    getWeather(latitude, longitude);
}

function saveCoords(coordObj) {
    localStorage.setItem(coords, JSON.stringify(coordObj));

}

function saveLanguage(langObj) {
    localStorage.setItem(lang, JSON.stringify(langObj))
}

function handleGeoError() {
    console.log("App couldn't access your location data. " +
        "You have to allow the app to access your geo data for its full function.");
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(coords);
    if (loadedCoords === null) {
        ask4Coords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        //console.log(loadedCoords);
        //console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        getLanguage(parsedCoords);
    }
}

function init() {
    loadCoords();
}

init();