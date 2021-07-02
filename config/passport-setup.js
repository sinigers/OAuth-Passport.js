const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
    //options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    // clientID: /* add your client ID here */,
    // clientSecret: /* add your client secret here */
}, (accessToken, refreshToken, profile, done) => {
    //accessToken -recieved from google, refereshToken - not to espire, profile - information of user
    
    // passport callback function
    console.log('passport callback function fired:');
    console.log(profile);
})
);