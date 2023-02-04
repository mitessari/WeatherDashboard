
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
$("#search-button").on("click", function (event) {
    event.preventDefault();
    var cityFound = $("#search-input").val();
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityFound}&limit=5&appid=${apiKey}`)
        .then(response => response.json())
        .then(cityFound => {
            //first city variable 
            let firstCity = cityFound[0];

            console.log(cityFound);
            console.log(firstCity);
        
        //div to show the city name with their respectives temperatures
            
            //renderForcast(firstCity)

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=79c2614c47312abd32270ca49ad0aabe`)

        

        //data comming from the cities temperature

        .then(response => response.json())
        .then(data => {

            console.log(data);
            renderForcast();
            //   document.querySelector("#today").textContent = data.list[0].main.temp;
            //forcast update
          
       



function renderForcast(){

var cityTitle = $("<div>");
            var title = $("<h3>");
            title.addClass("title");
            title.text(firstCity.name);
            var cityTemp = $("<p>");
            cityTemp.addClass = $("ciyTemperature");
            cityTemp.text = $(data.list[0].main.temp);
 cityTitle.append(title, cityTemp);
$("#today").append(cityTitle);
// 
}

    renderForcast();

//empty the div and recall the function
       $("#today").empty();

       renderForcast();


})
 });

});