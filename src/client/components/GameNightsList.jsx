import React from 'react';
import { List } from '@mui/material';
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

export default GameNightsList;
