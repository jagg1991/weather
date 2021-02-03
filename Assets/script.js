var container = $(".container");
var search = $('#search');
var cities = [""];
var input = $("")
var container2 = $(".containter2")
var button2 = document.getElementById("btn2");

for (var i = 0; i < cities.length; i++) {
    var row = $("<div>").addClass("row");
    var cityName = $("<div>").addClass("city-block col-1");

    row.append(cityName);

}

// function for the search button 
$("#btnSrch").on("click", function () {
    // getting the results from the text box
    results = $(this).prev().val();
    //creating new div
    var row = $("<div>").addClass("results");
    //creating a new header
    var h1 = $("<h1>");
    //append to container
    container.append(row);
    //append to new row
    row.append(h1).text(results);

});
function getApi() {

    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=1c1b243ed9ea0a94c869b772271e1eb5';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].name)
            }
            console.log(data)

        });
}

getApi();