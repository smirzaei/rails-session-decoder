var should = require('should'),
    sessionDecoder = require('./index');


var secret = '52541783ebfc236dc27e1d83cba2a4144b484897995bdf4d9a9977623987ee10b6e690d3c4218ebc50eccfb68f5babc3db0fcb131d3fbbce142803a03ac500db';
var cookie = 'N0paYjIyWTNIOWgxV2VON0RCM1AvenZzQVNFeWY0elBoQkZ5SnN4OVAybXZQMEErV0VGa1luM2VmYTg4cEk0Y2paVUtMUW8xbEQyUE5VbFJ1OTZUeWJiODdYNkxZSWxvYUtiaE1ucy9LM1BMUy8yd0N0ZExZQzYzUVFsaGZ4M044MjdOdWNJYWhMbW5HOTJpY2UzQUdBPT0tLWtuWk9IWVJpakpWak5oSmZ2d2VLbWc9PQ==--d4292397f777c8f79655884b3fcc241e4bc2fcf5';
var session = JSON.parse('{"session_id":"1cc5440b929e539280d94888629565d1","_csrf_token":"CzzmfmhiXOMfGDsL4wkUNsvgyjG7215I73e6bXX1MlQ="}');
var digest = 'sha1';
var decoder = sessionDecoder(secret, digest);

describe('Constructor', function() {
  it('stores the secret', function() {
    decoder.secret.should.be.exactly(secret);
  })
});

describe('Defaults', function(){

  it('has the correct digest', function() {
    decoder.digest.should.be.exactly(digest);
  });

  it('has the correct cookieSalt', function() {
    decoder.cookieSalt.should.be.exactly('encrypted cookie');
  });

  it('has the correct signedCookieSalt', function() {
    decoder.signedCookieSalt.should.be.exactly('signed encrypted cookie');
  });

  it('has the correct iterations', function() {
    decoder.iterations.should.be.exactly(1000);
  });

  it('has the correct keyLength', function() {
    decoder.keyLength.should.be.exactly(64);
  });
});

describe('#decodeCookie', function() {
  it('returns error when the cookie is not provided', function (done) {
    decoder.decodeCookie(null, function(err, result) {
      err.should.be.ok;

      done();
    })
  });

  it('returns error when the format invalid', function (done) {
    decoder.decodeCookie('InvalidCookie', function(err, result) {
      err.should.be.ok;

      done();
    })
  });

  it('returns the expected values', function (done) {
    decoder.decodeCookie(cookie, function(err, result) {
      (err == null).should.be.true;

      JSON.parse(result).should.eql(session);

      done();
    })
  });
});

describe('#decodeSignedCookie', function() {
  it('returns error when the cookie is not provided', function (done) {
    decoder.decodeSignedCookie(null, function(err, result) {
      err.should.be.ok;

      done();
    })
  });

  it('returns error when the format invalid', function (done) {
    decoder.decodeSignedCookie('InvalidCookie', function(err, result) {
      err.should.be.ok;

      done();
    })
  });

  //TODO: add a test case for signed cookie final value.
});

describe('#setSecret', function() {
  it('updates the secret', function() {
    var newSecret = 'new secret';
    decoder.secret.should.eql(secret);

    decoder.setSecret(newSecret);

    decoder.secret.should.eql(newSecret);
  })
});

describe('#setDigest', function() {
  it('updates the digest', function() {
    var newDigest = 'sha512';
    decoder.digest.should.eql(digest);

    decoder.setDigest(newDigest);

    decoder.digest.should.eql(newDigest);
  });
});

describe('#setCookieSalt', function() {
  it('updates the cookieSalt', function() {
    var newCookieSalt = 'new cookieSalt';
    decoder.cookieSalt.should.eql('encrypted cookie');

    decoder.setCookieSalt(newCookieSalt);

    decoder.cookieSalt.should.eql(newCookieSalt);
  })
});

describe('#setSignedCookieSalt', function() {
  it('updates the signedCookieSalt', function() {
    var newSignedCookieSalt = 'new signedCookieSalt';
    decoder.signedCookieSalt.should.eql('signed encrypted cookie');

    decoder.setSignedCookieSalt(newSignedCookieSalt);

    decoder.signedCookieSalt.should.eql(newSignedCookieSalt);
  })
});

describe('#setIterations', function() {
  it('updates the iterations', function() {
    var newIterations = 2000;
    decoder.iterations.should.eql(1000);

    decoder.setIterations(newIterations);

    decoder.iterations.should.eql(newIterations);
  })
});

describe('#setKeyLength', function() {
  it('updates the keyLength', function() {
    var newKeyLength = 128;
    decoder.keyLength.should.eql(64);

    decoder.setKeyLength(newKeyLength);

    decoder.keyLength.should.eql(newKeyLength);
  })
});
