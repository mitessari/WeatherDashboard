var cities = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];

function weatherButtons() {
    for (var i = 0; i < cities.length; i++) {


        var a = $("<button>");

        a.addClass("city");

        a.attr("data-name", cities[i]);

        a.text(cities[i]);

        $("#history").append(a);

    }
};

weatherButtons();



$("#search-button").on("click", function (event) {
    event.preventDefault();
    var cityFound = $("#search-input").val();
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityFound}&limit=5&appid=79c2614c47312abd32270ca49ad0aabe`)
        .then(response => response.json())
        .then(cityFound => {
            let firstCity = cityFound[0];

            console.log(firstCity);
            // console.log(firstCity.lat);
            // console.log(firstCity.lon);

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=79c2614c47312abd32270ca49ad0aabe`)

        })



        .then(response => response.json())
        .then(data => {

            console.log(data);
            //today weather
            document.querySelector("#today").textContent = data.list[0].main.temp;

            var temp = $("<div>");
            var title = $("<h3>");
            title.addClass("title");
            title.text(data.city.name.title);
            $(temp).append(title);
            $("#today").append(temp);

            //forcast update
            renderForcast(data)
        });

});


function renderForcast(data){

}

