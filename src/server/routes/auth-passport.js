const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Users } = require('../database/models/Users');

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
  async (request, accessToken, refreshToken, profile, done) => {
    const {
      id,
      displayName,
      emails,
    } = profile;
    if (await Users.findOne({ googleId: id }).exec()) {
      console.log('User already exists.');
    } else {
      console.log('User doesn\'t exist yet. Adding them to the Users collection');
      Users.create({
        name: displayName,
        googleId: id,
        email: emails[0].value,
      });
    }
    done(null, profile);
  },
));

console.log('Passport Built');
