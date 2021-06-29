var Spotify = require("node-spotify-api")

module.exports.getSongs = function(songName){
    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
      });
    
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) throw err;
        for (let i = 0; i < 10; i++){
            console.log(data.tracks.items[i].artists[0].name," : ", data.tracks.items[i].name, "\nPREVIEW: ", data.tracks.items[i].external_urls.spotify);
        }        
    })
}
