//ABOUT: various functions for manipulating the display, to be referenced from the index module
import * as index from './index.js';

export const domIdList = {
    'Search Bar': 'search-bar',
    'City Name': 'city-name',
    'Weather Status Container': 'weather',
    'Current Temperature': 'current-temp',
    'Weather Status Box': 'weather-status',
    'Feels Like Temperature': 'feels-like',
    'High Temperature': 'high',
    'Low Temperature': 'low',
    'Humidity': 'humidity',
    'Weather Icon': 'weather-icon',
    'Weather Description': 'weather-description',
    'Temperature Unit Conversion Button': 'conversion-button',
    'Search Button': 'search',
}

export function createSearchBarArea() {

    const searchBarBox = _createSearchContainer();
    const searchBar = _createSearchBar();
    const errorText = _createErrorTextArea();
    const searchButton = _createSearchButton();

    searchBarBox.appendChild(searchBar);
    searchBarBox.appendChild(errorText);
    searchBarBox.appendChild(searchButton);

    document.body.appendChild(searchBarBox);

    function _createSearchBar() {
        const searchBar = document.createElement('input');
        searchBar.type = 'text';
        searchBar.name = 'location';
        searchBar.placeholder = 'Search a Location';
        searchBar.id = domIdList['Search Bar'];
        return searchBar;
    }

    function _createSearchButton() {
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        searchButton.id = domIdList["Search Button"];
        return searchButton;
    }

    function _createErrorTextArea() {
        const errorText = document.createElement('div');
        errorText.classList.add('search-error-text');
        return errorText;
    }

    function _createSearchContainer() {
        const searchBarBox = document.createElement('div');
        searchBarBox.classList.add('search-bar', 'panel');
        return searchBarBox;
    }

}

export function createWeatherDisplay() {

    const weatherDisplayPanel = _createWeatherDisplayPanel();
    const cityName = _createCityName();
    const currentWeather = _createWeatherStatusBox();
    const feelsLikeInfoBox = _createInfoBox('Feels Like Temperature');
    const highTempBox = _createInfoBox('High Temperature');
    const lowTempBox = _createInfoBox('Low Temperature');
    const humidityBox = _createInfoBox('Humidity');

    weatherDisplayPanel.appendChild(cityName);
    weatherDisplayPanel.appendChild(currentWeather);
    weatherDisplayPanel.appendChild(feelsLikeInfoBox);
    weatherDisplayPanel.appendChild(highTempBox);
    weatherDisplayPanel.appendChild(lowTempBox);
    weatherDisplayPanel.appendChild(humidityBox);

    document.body.appendChild(weatherDisplayPanel);


    function _createCityName() {
        const cityName = document.createElement('div');
        cityName.id = domIdList["City Name"];
        return cityName;
    }

    function _createWeatherDisplayPanel() {
        const weatherDisplayPanel = document.createElement('div');
        weatherDisplayPanel.classList.add('weather-display', 'panel');

        return weatherDisplayPanel;
    }

    function _createWeatherStatusBox() {

        const currentWeatherStatusBox = document.createElement('div');
        currentWeatherStatusBox.id = domIdList["Weather Status Container"];

        const currentTemp = document.createElement('div');
        currentTemp.id = domIdList["Current Temperature"];

        const weatherStatus = document.createElement('div');
        weatherStatus.id = domIdList["Weather Status Box"];
        const weatherSymbol = document.createElement('img');
        weatherSymbol.id = domIdList["Weather Icon"];
        weatherSymbol.alt = 'weather icon';
        const weatherDescription = document.createElement('div');
        weatherDescription.id = domIdList["Weather Description"];
        weatherStatus.appendChild(weatherSymbol);
        weatherStatus.appendChild(weatherDescription);

        currentWeatherStatusBox.appendChild(currentTemp);
        currentWeatherStatusBox.appendChild(weatherStatus);

        return currentWeatherStatusBox;
    }

    function _createInfoBox(domId) {

        const infoContainer = document.createElement('div');
        infoContainer.id = domIdList[domId];

        const infoDescription = document.createElement('div');
        infoDescription.textContent = domId.replace(' Temperature', '');

        const infoOutput = document.createElement('div');
        infoOutput.classList.add('temp-value');

        infoContainer.appendChild(infoDescription);
        infoContainer.appendChild(infoOutput);

        return infoContainer;
    }
}

export function createConversionButton() {

    const conversionButton = document.createElement('button');
    conversionButton.classList.add('conversion-button');
    conversionButton.id = domIdList["Temperature Unit Conversion Button"];
    conversionButton.textContent = 'C\u00B0/F\u00B0';

    document.body.appendChild(conversionButton);
}

export function createHeader() {

    const header = document.createElement('header');
    header.textContent = 'The Weather App';

    document.body.appendChild(header);
}

export function clearSearchAndError() {

    document.getElementById(domIdList['Search Bar']).value = '';
    document.querySelector(`.search-error-text`).textContent = '';

}

export function convertTemperaturesOnDisplay(weatherUnits) {

    if (weatherUnits.imperial) {
        weatherUnits.imperial = false;
        weatherUnits.metric = true;
        weatherUnits['weather letter'] = 'C';
    } else {
        weatherUnits.imperial = true;
        weatherUnits.metric = false;
        weatherUnits['weather letter'] = 'F';
    }

    swapTemperatureValue(`#${domIdList['Current Temperature']}`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['Feels Like Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['High Temperature']} .temp-value`, 2, weatherUnits['weather letter']);
    swapTemperatureValue(`#${domIdList['Low Temperature']} .temp-value`, 2, weatherUnits['weather letter']);

}

function swapTemperatureValue(domSelector, charsToRemove, convertToUnit) {

    let tempToChange = document.querySelector(domSelector).textContent;
    tempToChange = tempToChange.slice(0, tempToChange.length - charsToRemove);
    document.querySelector(domSelector).textContent = index.convertTemperature(tempToChange, convertToUnit) + '\u00B0' + convertToUnit;
    
}

export function updateWeatherDisplay(weatherData, weatherUnits){

    document.getElementById(domIdList['City Name']).textContent = weatherData.name;

    document.getElementById(domIdList['Current Temperature']).textContent = Math.round(weatherData.main.temp) + '\u00B0' + weatherUnits['weather letter'];

    document.getElementById(domIdList['Weather Description']).textContent = weatherData.weather[0].main;

    let icon = document.getElementById(domIdList['Weather Icon']);
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    document.querySelector(`#${domIdList['Feels Like Temperature']} .temp-value`).textContent = Math.round(weatherData.main.feels_like) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList['High Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_max) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList['Low Temperature']} .temp-value`).textContent = Math.round(weatherData.main.temp_min) + '\u00B0' + weatherUnits['weather letter'];

    document.querySelector(`#${domIdList.Humidity} .temp-value`).textContent = `${Math.round(weatherData.main.humidity)}%`;
}