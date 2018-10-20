const config = require('./config.js');
const Twitter = require('twitter');
const T = new Twitter(config);
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  })
);
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  let tweetsToRender = [];

  getTweets(function(tweets, params) {
    tweets.forEach(function(tweet) {
      tweetsToRender.push({
        user_name: tweet[0],
        tweet: tweet[1]
      });
    });
    res.render('home', {
      tweets: tweetsToRender,
      query: params.q
    });
  });
});

function getTweets(callback) {
  let tweets = [];
  let params = {
    q: '#usa',
    count: 10
  };

  T.get('search/tweets', params, function(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      data.statuses.forEach(tweet => {
        tweets.push([tweet.user.screen_name, tweet.text]);
      });

      callback(tweets, params);
    }
  });
}

T.stream('statuses/filter', { track: '#usa' }, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
});

app.listen(3000, () => console.log('Listening om port: 3000'));
