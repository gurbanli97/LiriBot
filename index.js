var tweet = require("./twitter")
var song = require("./spotify")
var movie = require("./omdb")
var fs = require("fs")


var commandOne = process.argv[2];
var commandTwo = process.argv[3];

function callApp (c1, c2){
    if(c1 == 'twitter'){
        tweet.getTweets();
    }else if(c1 == 'song'){
        song.getSongs(c2);
    }else if(c1 == 'movie'){
        movie.getMovie(c2);
    }else if(c1 == 'readFromDoc'){
        readFromText();
    }else{
        console.log("Sorry, I don't understand you.");
    }
}

callApp(commandOne, commandTwo);

function readFromText(){
    fs.readFile("allcommands.txt", "utf8", function(err, data){
        if (err) throw err;
        data = data.split(",");
        callApp(data[0], data[1]);
    })
}
