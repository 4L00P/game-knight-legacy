const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Research
passport.serializeUser((user, done) => {
  done(null, user);
});

// Research
passport.deserializeUser((user, done) => {
  done(null, user);
});

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/callback',
    // Research
    passReqToCallback: true,
  },
  // Research
  (request, accessToken, refreshToken, profile, done) => done(null, profile),
));

console.log('Passport Built');
