import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

import Game from './Game';

function GamesList({ games, getGames, setGamesFilter }) {
  /**
   * Map through the games array and return the Game component with a game property
   */
  return (
    <List
      sx={{
        maxHeight: 365,
        position: 'relative',
        overflow: 'auto',
      }}
    >
      {games.map((game) => {
        const { _id } = game;
        return (
          <Game
            key={_id}
            game={game}
            getGames={getGames}
            setGamesFilter={setGamesFilter}
          />
        );
      })}
    </List>
  );
}

GamesList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ).isRequired,
  getGames: PropTypes.func.isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default GamesList;
