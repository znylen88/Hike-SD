$(document).ready(function () {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=san+diego,usa&appid=23ae5d398859e9f70c376412f82e08b1",
        method: "GET"
    }).then(function (weatherRes) {
        {
            let tempF = (weatherRes.main.temp - 273.15) * 1.8 + 32;
            let roundedTempF = Math.round(tempF)
            
            $("#temperature").text(roundedTempF + "°");
            $("#weather").text(weatherRes.weather[0].main);
            $("#wind").text("Wind: " + weatherRes.wind.speed + " mph");
            $("#humidity").text("Humidity: " + weatherRes.main.humidity + "%");
            $("#name").text(weatherRes.name);
        }
    })
});