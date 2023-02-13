
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

function currentWeatherSection(cityName) {
 fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=79c2614c47312abd32270ca49ad0aabe`)
    .then(response => response.json())
    .then(function (response) {
        console.log(response); 
       var cityLon = response[0].lon;
        var cityLat = response[0].lat;
        console.log(cityLon);
        console.log(cityLat);
       
    
   
        


    
 
    
    //div to show the city name with their respectives temperatures
              fetch(`https://api.openweathermap.org/data/2.5/forecast?lon=44.5&lat=13.55&appid=79c2614c47312abd32270ca49ad0aabe`)
 
           

            .then(response => response.json())
            .then(data=> {
 console.log(data)

 let cityweather = document.querySelector("#today");
 let currentDay = moment().format("M/D/YYYY");
    let todaynews = `<div id="cardNews1" class="card latestNews1" style="width: 60rem;">
    <div class="card-body">
      <h1 class="card-title">${response[0].name} ${currentDay}</h1>
      
      <p class="card-text"><li>Temperature: ${data.list[0].main.temp + " \u00B0F"}</li></p>
      <p class="card-text1"><li>Humidity: ${data.list[0].main.humidity}%</li></p>
      <p class="card-text"><li>Wind: ${data.list[0].wind.speed}KPH</li></p>
    </div>
  </div>`
   cityweather.innerHTML+=todaynews; 
})
})

}
   

    



      $("#search-button").on("click", function (event) {
        event.preventDefault();
            const cityName = $("#search-input").val();
            if (cityName === "" || cityName == null) {
                //send alert if search input is empty when submitted
                alert("Please enter name of city.");
               
            } else {
               // if cityName is valid, add it to search history list and display its weather conditions 
                
            
                currentWeatherSection(cityName);
                console.log(cityName);

            }
    
   
}) 

     
   
                

           
        //data comming from the cities temperature

      
            //   document.querySelector("#today").textContent = data.list[0].main.temp;
            //forcast update
//           var title = $("<h3>");
//           var currentDay = moment().format("M/D/YYYY");
//             title.addClass("title");
//             title.text((`${cityName} (${currentDay}`));

//             var cityTemp = $("<p>");
//             cityTemp.addClass = $("ciyTemperature");
//             cityTemp.text = $(response.list[0].main.temp);
//  cityTitle.append(title, cityTemp);
// $("#today").append(cityTitle);
//adding the current weather to the page 
// var currentTemperature = $("#today");
// currentTemperature.text("Temperature: " + response.current.temp + " \u00B0F");

//});

       
// console.log(response);
            



//empty the div and recall the function
     
       