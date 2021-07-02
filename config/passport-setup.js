const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options for the google strat

    clientID: /* add your client ID here */,
    clientSecret: /* add your client secret here */
}), () => {
    //passort callback function
}
)