import React from 'react';
import { List } from '@mui/material';

function GameNightsList({ gameNights, getGameNights }) {
  return (
    <List>
      {gameNights.map((night) => (
        <p>{night.name}</p>
      ))}
      Nights List
    </List>
  );
}

export default GameNightsList;
