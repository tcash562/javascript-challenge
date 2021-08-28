var sightings = data;
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();

    inputElement = d3.select("#form-ufo");
    inputValue = inputElement.property("value");

    tbody.html('');

    var results = sightings.filter(sighting => sighting.datetime == inputValue);
    results.forEach((UFOReport) => {

        var row = tbody.append("tr");

        Object.entries(UFOReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
