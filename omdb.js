var axios = require("axios")

module.exports.getMovie = function(request){
    var url = "http://www.omdbapi.com/?t=" + request + "&y=&plot=full&tomatoes=true&apikey=trilogy"
    axios.get(url)
        .then(function(result){
            console.log("Name: ", result.data.Title);
            console.log("Year: ", result.data.Year);
            console.log("Rate: ", result.data.Rated);
            console.log("Release date: ", result.data.Released);
            console.log("Runtime: ", result.data.Runtime);
            console.log("Genres: ", result.data.Genre);
            console.log("Country: ", result.data.Country);
            console.log("Ratings: ", result.data.Ratings[0].Source , result.data.Ratings[0].Value);
            console.log("Plot: ", result.data.Plot);
        })
}