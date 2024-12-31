import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

import Game from './Game';

function GamesList({ games, getGames }) {
  /**
   * Map through the games array and return the Game component with a game property
   */
  return (
    <List>
      {games.map((game) => {
        const { _id } = game;
        return (
          <Game
            key={_id}
            game={game}
            getGames={getGames}
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
};

export default GamesList;
