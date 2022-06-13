import * as display from './display.js';
import * as weatherCall from './weather-call.js';
import './style.css';

const weatherUnits = {
    imperial: true,
    metric: false,
    'weather letter': 'F',
}

display.createHeader();
display.createSearchBarArea();
display.createWeatherDisplay();
display.createConversionButton();

updateWeatherInfo('montreal');


const conversionButton = document.getElementById(display.domIdList['Temperature Unit Conversion Button']);
const searchButton = document.getElementById(display.domIdList['Search Button']);

conversionButton.addEventListener('click', convertTemperaturesOnDisplay);
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

    weatherUnits.imperial = true;
    weatherUnits.metric = false;
    weatherUnits['weather letter'] = 'F';

    document.getElementById(display.domIdList['City Name']).textContent = weatherData.name;

    document.getElementById(display.domIdList['Current Temperature']).textContent = Math.round(weatherData.main.temp) + '\u00B0' + weatherUnits['weather letter'];

    document.getElementById(display.domIdList['Weather Description']).textContent = weatherData.weather[0].main;

    let icon = document.getElementById(display.domIdList['Weather Icon']);
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    document.querySelector(`#${display.domIdList['Feels Like Temperature']} .temp-value`).textContent = Math.round(weatherData.main.feels_like) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${display.domIdList['High Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_max) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${display.domIdList['Low Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_min) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${display.domIdList.Humidity} .temp-value`).textContent = `${Math.round(weatherData.main.humidity)}%`;

    clearSearchAndError();

}

function clearSearchAndError() {

    document.getElementById(display.domIdList['Search Bar']).value = '';
    document.querySelector(`.search-error-text`).textContent = '';

}

function convertTemperaturesOnDisplay() {

    if (weatherUnits.imperial) {
        weatherUnits.imperial = false;
        weatherUnits.metric = true;
        weatherUnits['weather letter'] = 'C';
    } else {
        weatherUnits.imperial = true;
        weatherUnits.metric = false;
        weatherUnits['weather letter'] = 'F';
    }

    swapTemperatureValue(`#${display.domIdList['Current Temperature']}`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${display.domIdList['Feels Like Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${display.domIdList['High Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${display.domIdList['Low Temperature']} .temp-value`, 2, weatherUnits['weather letter']);

}

function swapTemperatureValue(domSelector, charsToRemove, convertToUnit) {

    let tempToChange = document.querySelector(domSelector).textContent;
    tempToChange = tempToChange.slice(0, tempToChange.length - charsToRemove);
    document.querySelector(domSelector).textContent = convertTemperature(tempToChange, convertToUnit) + '\u00B0' + convertToUnit;
    
}

function convertTemperature(temperature, convertToThisUnit) {

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


