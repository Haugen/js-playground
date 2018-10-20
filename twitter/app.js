const config = require('./config.js');
const Twitter = require('twitter');
const T = new Twitter(config);
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening om port: 3000'));

app.get('/', function(req, res) {
  let tweetsToRender = [];

  getTweets(function(tweets) {
    tweets.forEach(function(tweet) {
      tweetsToRender.push(`${tweet[0]}: ${tweet[1]}`);
    });
    res.send(tweets);
  });
});

function getTweets(callback) {
  let tweets = [];
  let params = {
    q: '#usa',
    count: 2
  };

  T.get('search/tweets', params, function(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      data.statuses.forEach(tweet => {
        tweets.push([tweet.user.screen_name, tweet.text]);
      });

      callback(tweets);
    }
  });
}
