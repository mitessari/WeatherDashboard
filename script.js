
// //cities buttons
// var cities = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];

// function weatherButtons() {
//     for (var i = 0; i < cities.length; i++) {


//         var a = $("<button>");

//         a.addClass("city");

//         a.attr("data-name", cities[i]);

//         a.text(cities[i]);

//         $("#history").append(a);

//     }
// };

// weatherButtons();

// global variables
var apiKey = "79c2614c47312abd32270ca49ad0aabe";
var savedSearches = [];

// function to list of past cities
var searchHistoryList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove(); 
//create p tag 
var citySearch = $("<p>");
 citySearch.addClass = $("pastSearch");
 citySearch.text = $(cityName);
 
// container to append the entry text
var cityContainer = $("<div>");
cityContainer.addClass = $("past-search-container");
cityContainer.append(citySearch);

// append container to search history 
$("#history").append(cityContainer);

if (savedSearches.length > 0){
    // update savedSearches array with previously saved searches
    var previousSavedSearches = localStorage.getItem("savedSearches");
    savedSearches = JSON.parse(previousSavedSearches);
}

// add city name to array of saved searches
savedSearches.push(cityName);
localStorage.setItem("savedSearches", JSON.stringify(savedSearches));

// reset search input
$("#search-input").val("");

};




//search city name by input
//$("#search-button").on("click", function (event) {

    //event.preventDefault();
 var currentWeather = function(cityName) {
    //var cityFound = $("#search-input").val();
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        // get city's longitude and latitude
        var cityLon = response.coord.lon;
        var cityLat = response.coord.lat; 
     });
    //div to show the city name with their respectives temperatures
              return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`)

            

            .then(function(response) {
                return response.json();
            })
            // get data from response and apply them to the current weather section
            .then(function(response){
                searchHistoryList(cityName);
        
                var currentWeatherContainer = $("#today");
                currentWeatherContainer.addClass("current-weather-container");

           
        //data comming from the cities temperature

      
            //   document.querySelector("#today").textContent = data.list[0].main.temp;
            //forcast update
          var title = $("<h3>");
          var currentDay = moment().format("M/D/YYYY");
            title.addClass("title");
            title.text((`${cityName} (${currentDay}`));

            var cityTemp = $("<p>");
            cityTemp.addClass = $("ciyTemperature");
            cityTemp.text = $(data.list[0].main.temp);
 cityTitle.append(title, cityTemp);
$("#today").append(cityTitle);
// 
})
    

}

//empty the div and recall the function
     
        