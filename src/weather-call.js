//free api key from openweathermap.org
const API_KEY = 'd78f36805db656f7f4cf2a5ddb1892c7';

export function getCurrentWeather(location, units = 'standard') {

    let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    if (units === 'metric') {
        searchUrl += '&units=metric';
    } else {
        searchUrl += '&units=imperial';
    }
    console.log('URL to search: ' + searchUrl);

    return fetch(searchUrl, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log('Location: '+ weatherData.name);
            return weatherData;
        });

}
