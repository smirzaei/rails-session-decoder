[![Build Status](https://travis-ci.org/smirzaei/node-rails-session.svg?branch=master)](https://travis-ci.org/smirzaei/node-rails-session)

Simple utility for decoding Rails 4.x sessions in node.js

Installing:
----------

    $ npm install rails-session-decoder

Usage:
-------------

    var sessionDecoder = require('rails-session-decoder');

    var secret = 'find me in your rails app at config/secrets.yml';
    var decoder = sessionDecoder(secret);

    var sampleCookie = 'N0paYjIyWTNIOWgxV2VON0RCM1AvenZzQVNFeWY0elBoQkZ5SnN4OVAybXZQMEErV0VGa1luM2VmYTg4cEk0Y2paVUtMUW8xbEQyUE5VbFJ1OTZUeWJiODdYNkxZSWxvYUtiaE1ucy9LM1BMUy8yd0N0ZExZQzYzUVFsaGZ4M044MjdOdWNJYWhMbW5HOTJpY2UzQUdBPT0tLWtuWk9IWVJpakpWak5oSmZ2d2VLbWc9PQ==--d4292397f777c8f79655884b3fcc241e4bc2fcf5';


    decoder.decodeCookie(sampleCookie, function(err, sessionData) {
	  console.log(sessionData);
	  // => {"session_id":"1cc5440b929e539280d94888629565d1","_csrf_token":"CzzmfmhiXOMfGDsL4wkUNsvgyjG7215I73e6bXX1MlQ="}
    });