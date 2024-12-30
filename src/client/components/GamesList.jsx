import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

import Game from './Game';

function GamesList({ games }) {
  return (
    <List>
      {games.map((game) => {
        const { _id } = game;
        return (
          <Game
            key={_id}
            game={game}
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
};

export default GamesList;
