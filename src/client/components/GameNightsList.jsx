import React from 'react';
import { List } from '@mui/material';
import PropTypes from 'prop-types';
import Night from './Night';

function GameNightsList({ gameNights, getGameNights }) {
  return (
    <List>
      {gameNights.map((gameNight) => (
        <Night
          key={gameNight.name}
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
