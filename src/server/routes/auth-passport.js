const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Users } = require('../database/models/Users');

/*
  Set GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET in the .env file
    - This information comes from Google when you create an OAuth token
*/
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

// Set up the Google Strategy for authentication
passport.use(new GoogleStrategy(
  {
    // ID & Secret come from OAuth token, save in .env file
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    // This needs to match /auth router endpoint and saved redirect URI with Google
    callbackURL: '/auth/callback',
    // Puts request in the callback function
    passReqToCallback: true,
  },
  // On successful login from Google, this function is called:
  async (request, accessToken, refreshToken, profile, done) => {
    try {
      // Grab id, displayName, and emails from Google Profile
      const {
        id,
        displayName,
        emails,
      } = profile;
      // Check for a user in the Database Users collection
      if (await Users.findOne({ googleId: id }).exec()) {
        console.log('User already exists.');
        done(null, profile);
      } else {
        console.log('User doesn\'t exist yet. Adding them to the Users collection');
        // Create a user if there isn't one in the Database Users collection
        Users.create({
          name: displayName,
          googleId: id,
          // emails is an array, use the first email in the array
          email: emails[0].value,
        })
          .then(() => {
            done(null, profile);
          });
      }
      // Call done with the profile to execute the next route since this is middleware
    } catch (err) {
      // Handle errors
      done(err, null);
    }
  },
));

/*
  Saves userId to req.session.passport
    - Removed when user logs out
    - Will be passed as the first argument in deserializeUser
*/
passport.serializeUser(async (user, done) => {
  try {
    // Get the user _id from Database
    const { _id } = await Users.findOne({ googleId: user.id }, '_id').exec();
    // Call done with userId (_id); saves userId to req.session.passport.user
    done(null, _id);
  } catch (err) {
    // Handle errors
    done(err, null);
  }
});

/*
  Saves user object from Database to req.user while session is active
    - Removed when user logs out (req.user becomes 'undefined' on logout)
    - All requests to the server will have a req.user object while session is active
*/
passport.deserializeUser(async (userId, done) => {
  try {
    // Grab the user object from database using the userId from serializeUser
    const user = await Users.findById(userId);
    // Call done with user object; saves user object to req.user
    done(null, user);
  } catch (err) {
    // Handle errors
    done(err, null);
  }
});

console.log('Passport Built');
