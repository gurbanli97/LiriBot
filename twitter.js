var Twitter = require("twitter");
var dotenv = require("dotenv");
dotenv.config();

module.exports.getTweets = function(){

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var params = {
        screen_name: "BBCBreaking"
    };

    client.get("statuses/user_timeline", params, function(err, tweets, res){
        if(err) throw err

        tweets.forEach(obj => {
            console.log(obj.created_at);
            console.log("");
            console.log(obj.text)
        });
    })
}
