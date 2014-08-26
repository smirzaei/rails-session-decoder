var crypto = require('crypto');

/**
 *
 * @param {String} secret
 */
module.exports = function(secret) {

  this.secret = secret;
  this.cookieSalt = 'encrypted cookie'; //Rails.application.config.action_dispatch.encrypted_cookie_salt
  this.signedCookieSalt = 'signed encrypted cookie'; //Rails.application.config.action_dispatch.encrypted_signed_cookie_salt
  this.iterations = 1000;
  this.keyLength = 64;



  return {
    secret: this.secret,
    cookieSalt: this.cookieSalt,
    signedCookieSalt: this.signedCookieSalt,
    iterations: this.iterations,
    keyLength: this.keyLength
  };
};