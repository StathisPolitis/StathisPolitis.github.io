var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var nameInputEl = document.querySelector('#username');
var nameContainerEl = document.querySelector('#names-container');
var nameSearchTerm = document.querySelector('#name-search-term');


var getCityInfo = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + city + ",us&appid=" + APIKey;
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCityInfo(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to retrieve data');
      });
  };

  
var displayCityInfo = function (info, searchTerm) {
    if (info.length === 0) {
      nameContainerEl.textContent = 'No info found.';
      return;
    }
  

  
  userFormEl.addEventListener('submit', formSubmitHandler);
  languageButtonsEl.addEventListener('click', buttonClickHandler);
}