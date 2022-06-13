import * as display from './display.js';
import * as weatherCall from './weather-call.js';
import './style.css';

//keep track of what units are being displayed
const weatherUnits = {
    imperial: true,
    metric: false,
    'weather letter': 'F',
}

//initial page setup
display.createHeader();
display.createSearchBarArea();
display.createWeatherDisplay();
display.createConversionButton();

updateWeatherInfo('Los Angeles');

const conversionButton = document.getElementById(display.domIdList['Temperature Unit Conversion Button']);
const searchButton = document.getElementById(display.domIdList['Search Button']);

conversionButton.addEventListener('click', () => {
    display.convertTemperaturesOnDisplay(weatherUnits);
});

searchButton.addEventListener('click', searchLocation);

function searchLocation() {

    let searchInput = document.getElementById(display.domIdList['Search Bar']).value;

    if (searchInput === '') {
        document.querySelector(`.search-error-text`).textContent = 'Enter a location to search...';
        return;
    }

    updateWeatherInfo(searchInput);
}

async function updateWeatherInfo(location) {

    const weatherData = await weatherCall.getCurrentWeather(location);

    if(weatherData.message === 'city not found'){
        console.log('api call failed');
        document.querySelector('.search-error-text').textContent = 
        'Location should be in format: city name/city name, country code';
        return;
    }
    
    //normalize the units to F by default
    weatherUnits.imperial = true;
    weatherUnits.metric = false;
    weatherUnits['weather letter'] = 'F';

    display.updateWeatherDisplay(weatherData, weatherUnits);
    display.clearSearchAndError();

}

export function convertTemperature(temperature, convertToThisUnit) {

    const CONVERSION_FACTOR = 1.8;
    const TEMP_OFFSET = 32;

    let result;

    if (convertToThisUnit === 'F') {
        result = Math.round(temperature * CONVERSION_FACTOR) + TEMP_OFFSET;
        return result;
    } else if (convertToThisUnit === 'C') {
        result = Math.round((temperature - TEMP_OFFSET) / CONVERSION_FACTOR);
        return result;
    } else {
        return temperature;
    }
}


