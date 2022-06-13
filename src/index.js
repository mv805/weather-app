import * as display from './display.js';
import * as weatherCall from './weather-call.js';
import './style.css';


/* free API key: d78f36805db656f7f4cf2a5ddb1892c7

*/
// class WeatherDisplayElements {

//     #weatherDisplayElements = {
//         'City Name': undefined,
//         'Current Temperature': undefined,
//         'Feels Like Temperature': undefined,
//         'High Temperature': undefined,
//         'Low Temperature': undefined,
//         'Humidity': undefined,
//         'Weather Icon': undefined,
//         'Weather Description': undefined,
//     };

//     constructor() {
//         Object.keys(this.#weatherDisplayElements).forEach(key => {
//             this.#weatherDisplayElements[key] = document.getElementById(display.domIdList[key]);
//         });
//     }

//     getWeatherElement(elementName) {
//         return this.#weatherDisplayElements[elementName];
//     }

// }
const weatherUnits = {
    imperial: true,
    metric: false,
}

display.createHeader();
display.createSearchBarArea();
display.createWeatherDisplay();
display.createConversionButton();

updateWeatherInfo('montreal');


const conversionButton = document.getElementById(display.domIdList['Temperature Unit Conversion Button']);
const searchButton = document.getElementById(display.domIdList['Search Button']);

conversionButton.addEventListener('click', () => {
    convertTemperaturesOnDisplay();
});

/*
*fill out initial boxes 
*search event listener
*   when clicked, will fill in boxes or error
*units even listener
*   when clicked will toggle the temp units
*
*
*
*/

function updateWeatherInfo(location) {
    weatherCall.getCurrentWeather(location)
        .then(resultData => {
            document.getElementById(display.domIdList['City Name']).textContent = resultData.name;

            document.getElementById(display.domIdList['Current Temperature']).textContent = Math.round(resultData.main.temp) + '\u00B0' + 'F';

            document.getElementById(display.domIdList['Weather Description']).textContent = resultData.weather[0].main;

            let icon = document.getElementById(display.domIdList['Weather Icon']);
            icon.src = `http://openweathermap.org/img/wn/${resultData.weather[0].icon}.png`;

            document.querySelector(`#${display.domIdList['Feels Like Temperature']} .temp-value`).textContent = Math.round(resultData.main.feels_like) + '\u00B0';

            document.querySelector(`#${display.domIdList['High Temperature']} .temp-value`).textContent = Math.round(resultData.main.temp_max) + '\u00B0';

            document.querySelector(`#${display.domIdList['Low Temperature']} .temp-value`).textContent = Math.round(resultData.main.temp_min) + '\u00B0';

            document.querySelector(`#${display.domIdList.Humidity} .temp-value`).textContent = `${Math.round(resultData.main.humidity)}%`;
        })
}

function convertTemperaturesOnDisplay() {

    let convertToUnit;

    if (weatherUnits.imperial){
        weatherUnits.imperial = false;
        weatherUnits.metric = true;
        convertToUnit = 'C';
    } else {
        weatherUnits.imperial = true;
        weatherUnits.metric = false;
        convertToUnit = 'F';
    }

    swapTemperatureValue(`#${display.domIdList['Current Temperature']}`, 2, convertToUnit, true);
    swapTemperatureValue(`#${display.domIdList['Feels Like Temperature']} .temp-value`, 1, convertToUnit, false);
    swapTemperatureValue(`#${display.domIdList['High Temperature']} .temp-value`, 1, convertToUnit, false);
    swapTemperatureValue(`#${display.domIdList['Low Temperature']} .temp-value`, 1, convertToUnit, false);

}

function swapTemperatureValue(domSelector, charsToRemove, convertToUnit, degreeSymbol) {

    let degreeSymbolString;

    if(degreeSymbol){
        degreeSymbolString = '\u00B0';
    } else {
        degreeSymbolString = '';
    }

    let tempToChange = document.querySelector(domSelector).textContent;
    tempToChange = tempToChange.slice(0, tempToChange.length - charsToRemove);
    document.querySelector(domSelector).textContent = convertTemperature(tempToChange, convertToUnit) + degreeSymbolString + convertToUnit;
}

function convertTemperature(temperature, convertToThisUnit) {

    const CONVERSION_FACTOR = 1.8;
    const TEMP_OFFSET = 32;
    
    let result;

    if(convertToThisUnit === 'F'){
        result = Math.round(temperature * CONVERSION_FACTOR) + TEMP_OFFSET;
        return result;
    } else if (convertToThisUnit === 'C'){
        result = Math.round((temperature - TEMP_OFFSET) / CONVERSION_FACTOR);
        return result;
    }  else {
        return temperature;
    }
}


