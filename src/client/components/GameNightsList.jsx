import React from 'react';
import { List } from '@mui/material';
import PropTypes from 'prop-types';
import Night from './game-night-accordion/Night';

function GameNightsList({ gameNights, getGameNights }) {
  return (
    <List>
      {gameNights.map((gameNight) => (
        <Night
          // eslint-disable-next-line no-underscore-dangle
          key={gameNight._id}
          gameNight={gameNight}
          getGameNights={getGameNights}
        />
      ))}
    </List>
  );
}

GameNightsList.propTypes = {
  gameNights: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default GameNightsList;
