import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// Child components:
import GameGeneralInfo from './game-info-components/GameGeneralInfo';
import GameCatsAndMechsInfo from './game-info-components/GameCatsAndMechsInfo';
import GameRatingAndNotesInfo from './game-info-components/GameRatingAndNotesInfo';
import GameDescriptionInfo from './game-info-components/GameDescriptionInfo';

function GameInfo({ game, getGames, setGamesFilter }) {
  // Destructure important info from the game object
  const {
    _id,
    description,
    yearPublished,
    minPlayers,
    maxPlayers,
    playTime,
    minAge,
    notes,
    rating,
    categories,
    mechanics,
  } = game;

  return (
    <Box>
      <GameGeneralInfo
        yearPublished={yearPublished}
        minPlayers={minPlayers}
        maxPlayers={maxPlayers}
        playTime={playTime}
        minAge={minAge}
      />

      <GameCatsAndMechsInfo
        categories={categories}
        mechanics={mechanics}
        setGamesFilter={setGamesFilter}
      />

      <GameRatingAndNotesInfo
        _id={_id}
        rating={rating}
        notes={notes}
        getGames={getGames}
      />

      <GameDescriptionInfo
        description={description}
      />
    </Box>
  );
}

GameInfo.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    yearPublished: PropTypes.number,
    minPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
    playTime: PropTypes.number,
    minAge: PropTypes.number,
    notes: PropTypes.string,
    rating: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    mechanics: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  getGames: PropTypes.func.isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default GameInfo;
