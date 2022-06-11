
export const DOMIdList = {
    'Search Bar': 'search-bar',
    'City Name': 'city-name',
    'Weather Status': 'weather',
    'Current Temperature': 'current-temp',
    'Weather Status Box': 'weather-status',
    'Feels Like Temperature': 'feels-like',
    'High Temperature': 'high',
    'Low Temperature': 'low',
    'Humidity': 'humidity'
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
        searchBar.id = DOMIdList['Search Bar'];
        return searchBar;
    }

    function _createSearchButton() {
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
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
        cityName.id = DOMIdList["City Name"];
        return cityName;
    }

    function _createWeatherDisplayPanel() {
        const weatherDisplayPanel = document.createElement('div');
        weatherDisplayPanel.classList.add('weather-display', 'panel');

        return weatherDisplayPanel;
    }

    function _createWeatherStatusBox() {

        const currentWeatherStatusBox = document.createElement('div');
        currentWeatherStatusBox.id = DOMIdList["Weather Status Box"];
        const currentTemp = document.createElement('div');
        currentTemp.id = DOMIdList["Current Temperature"];

        const weatherStatus = document.createElement('div');
        weatherStatus.id = DOMIdList["Weather Status"];
        const weatherSymbol = document.createElement('img');
        const weatherDescription = document.createElement('div');
        weatherStatus.appendChild(weatherSymbol);
        weatherStatus.appendChild(weatherDescription);

        currentWeatherStatusBox.appendChild(currentTemp);
        currentWeatherStatusBox.appendChild(weatherStatus);

        return currentWeatherStatusBox;
    }

    function _createInfoBox(domId) {

        const infoContainer = document.createElement('div');
        infoContainer.id = DOMIdList[domId];

        const infoDescription = document.createElement('div');

        const infoOutput = document.createElement('div');
        infoOutput.classList.add('temp-value');

        infoContainer.appendChild(infoDescription);
        infoContainer.appendChild(infoOutput);

        return infoContainer;
    }
}

