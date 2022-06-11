
export const DOMIdList = {
    'Search Bar': 'search-bar',
    'City Name': 'city-name',
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

    function _createWeatherDisplayPanel() {
        const weatherDisplayPanel = document.createElement('div');
        
    }
}

