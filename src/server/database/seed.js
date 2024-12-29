const { gamesData } = require('./seed-data');
require('./index');
const { Games } = require('./models/Games');

const seed = () => {
  Games.deleteMany({})
    .then(() => Games.create(gamesData))
    .then(() => { console.log('Games seeded in the database'); })
    .catch((err) => {
      console.error('Error deleting games: ', err);
    });
};

seed();
