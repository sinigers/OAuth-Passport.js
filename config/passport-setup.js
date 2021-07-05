const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  //user.id - id from Mongo db
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    //user.id - id from Mongo db
      User.findById(id).then((user) => { 
        done(null, user);   
      });
  });

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
    
   //check if user already exists in our db
   User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
        // already have this user
        console.log('user is: ', currentUser);
        done(null, currentUser);
    } else {
        // if not, create user in our db
        new User({
            //profile.id - id from google...
            googleId: profile.id,
            username: profile.displayName,

            //get imgage from profile
            thumbnail: profile._json.image.url
        }).save().then((newUser) => {
            console.log('created new user: ', newUser);
            done(null, newUser);
        });
    }
});
})
);