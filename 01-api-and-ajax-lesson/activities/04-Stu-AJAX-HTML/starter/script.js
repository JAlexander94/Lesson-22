// The below code fills in the first row of the table
function createrow(titlename,movieyear,movieactors){
  // Create and save a reference to new empty table row
  const newrow = $('<tr>')
  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  const name = $('<td>').text(titlename)
  const year = $('<td>').text(movieyear)
  const actors = $('<td>').text(movieactors)
  // Append the td elements to the new table row
  newrow.append(name,year,actors)
  // Append the table row to the tbody element
  $("tbody").append(newrow)
}

function addmovie(moviename){
  var queryURL = "https://www.omdbapi.com/?t=" + moviename + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
createrow(response.Title,response.Year,response.Actors)
});
}

addmovie("Dune")

// Repeat the above logic to add rows for two more movies of your choice
addmovie("About+a+boy")

addmovie("Gladiator")

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions