var cities = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];

function weatherButtons() {
    for (var i = 0; i < cities.length; i++) {

      
        var a = $("<button>");
       
        a.addClass("city");
       
        a.attr("data-name", cities[i]);
        
        a.text(cities[i]);
        
        $("#today").append(a);
      }
    };
    
weatherButtons();


 $("#search-button").on("click", function(event) {
    event.preventDefault();
    var citiesFound = $("#search-input").val();
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${citiesFound}&limit=5&appid=79c2614c47312abd32270ca49ad0aabe`)
.then (response => response.json())
.then (citiesFound => {
    let firstCity = citiesFound[0];
    document.querySelector("#history").textContent = JSON.stringify(citiesFound);
    // console.log(firstCity);
    // console.log(firstCity.lat);
    // console.log(firstCity.lon);
    
return fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=79c2614c47312abd32270ca49ad0aabe`)
    
 })



.then (response => response.json())
.then (data => {
    
    console.log(data);
    
});

 });