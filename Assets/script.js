var container = $("#city");
var search = $('#search');

var cityName = $('#cityName')
var button2 = document.getElementById("btn2");
var forcast = $('.futureDisplay')
    //var todaysDate = moment().format("MM/DD/YYYY");

    ;



// function for the search button 
$("#btnSrch").on("click", function () {

    // getting the results from the text box
    results = $(this).prev().val().trim();
    //creating new div
    if (results === "") {
        alert("Please enter a city!")
        return;
    }
    var row = $("<button>").addClass("results")
    //creating a new header
    var h1 = $("<h1>");
    //append to container
    container.append(row);
    //append to new row
    row.append(h1).text(results);

    if (results) {
        getApi(results)

    }
    $('.weather').empty();
    $('.col-2').empty();
    $('.futureDisplay').empty();
    $('#cityName').empty();

});



var getApi = function (city) {

    // var name = $(this).prev().val().trim();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=1c1b243ed9ea0a94c869b772271e1eb5';

    if (city === "") {
        return;
    }

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var lat = data.coord.lat
            var lon = data.coord.lon
            var row = $('<div>').addClass("col-9 weather card")
            // var date = $("<h1>").text(data.daily[i].dt)
            var h1 = $('<h1>').text(data.name);
            var h2 = $('<h2>').text("Tempature: " + data.main.temp + ' °F');
            var h3 = $('<h3>').text("Humidity: " + data.main.humidity + ' %');
            var h4 = $('<h4>').text("Wind: " + data.wind.speed + ' MPH');
            // var hr = $('<hr>');

            cityName.append(row);
            row.append(h1, h2, h3, h4);





            console.log(data)
            var seceondUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=1c1b243ed9ea0a94c869b772271e1eb5';
            fetch(seceondUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    var h5 = $('<h5>').text("UV: " + data.current.uvi);
                    cityName.append(row);
                    row.append(h5);

                    var header = $("<h1>").text("5 day weather forcast!").addClass("weatherForcast");
                    forcast.append(header)
                    for (var i = 0; i < 5; i++) {
                        // let unix_timestamp = data.daily[i].dt
                        // var date = new Date(unix_timestamp * 1000);
                        // console.log(date);
                        var row2 = $('<div>').addClass("col-2 card forcast");
                        var temp = $('<h6>').text("Tempature: " + data.daily[i].temp.day + '°');
                        var hum = $('<p>').text("Humidity: " + data.daily[i].humidity + " %");
                        var wind = $("<p>").text("Wind: " + data.daily[i].wind_speed + "MPH")
                        // var h2 = $('<h2>').text.timeConverter(data.current.dt);
                        forcast.append(row2);
                        row2.append(temp, hum, wind)
                    }
                })
            return;
        });






}




