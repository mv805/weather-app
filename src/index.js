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
    'imperial-unit': '\u00B0',
    metric: false,
    'metric unit': '\u00B0'
}

display.createHeader();
display.createSearchBarArea();
display.createWeatherDisplay();
display.createConversionButton();

updateWeatherInfo('montreal');
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

            document.getElementById(display.domIdList['Current Temperature']).textContent = Math.round(resultData.main.temp) + '\u00B0';

            document.getElementById(display.domIdList['Weather Description']).textContent = resultData.weather[0].main;

            let icon = document.getElementById(display.domIdList['Weather Icon']);
            icon.src = `http://openweathermap.org/img/wn/${resultData.weather[0].icon}.png`;

            document.querySelector(`#${display.domIdList['Feels Like Temperature']} .temp-value`).textContent = Math.round(resultData.main.feels_like) + '\u00B0';

            document.querySelector(`#${display.domIdList['High Temperature']} .temp-value`).textContent = Math.round(resultData.main.temp_max) + '\u00B0';

            document.querySelector(`#${display.domIdList['Low Temperature']} .temp-value`).textContent = Math.round(resultData.main.temp_min) + '\u00B0';
            
            document.querySelector(`#${display.domIdList.Humidity} .temp-value`).textContent = `${Math.round(resultData.main.humidity)}%`;
        })
}

function updateTempUnits() {
    
}


