const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;



passport.use(new GoogleStrategy(
  {//taking scope out of here and adding it to the router get request so we can call passport.authenticate
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: /*'/redirect/google',*/'auth/google/redirect',
    scope: ['profile', 'email'],
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('Access Token:', accessToken);
    console.log('Refresh:', refreshToken);
    console.log('Profile:', profile);
  },
));