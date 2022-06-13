//free api key from openweathermap.org
const API_KEY = 'd78f36805db656f7f4cf2a5ddb1892c7';

export async function getCurrentWeather(location, units = 'imperial') {

    let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    if (units === 'metric') {
        searchUrl += '&units=metric';
    } else {
        searchUrl += '&units=imperial';
    }

    console.log(searchUrl);
    
    const response = await fetch(searchUrl, {mode: 'cors'});
    const json = await response.json();

    return json;

}
