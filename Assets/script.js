var container = $(".container");
var search = $(".search")
var cities = [""]
ButtonSearch = $(".search")
var requestUrl = ''

for (var i = 0; i < cities.length; i++) {
    var row = $("<div>").addClass("row");
    var cityName = $("<div>").addClass("city-block col-1");

    row.append(cityName);

}

$(document).ready(function () {
    $("#btnSrch").on("click", function () {
        ButtonSearch.attr("data-text")
        var row = $("<div>")
        var h1 = $("<h1>").text($(this).attr("data-text"))

        container.append(row);
        row.append(searchText, h1)

    });
});