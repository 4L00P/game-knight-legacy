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
        '&::-webkit-scrollbar': {
          width: '1em',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(23, 154, 23, 0)',
          webkitBoxShadow: 'inset 0 0 6px rgba(29, 179, 37, 0)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(9, 188, 36, 0.1)',
          outline: '3px solid green',
          borderRadius: 5,
        },
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
