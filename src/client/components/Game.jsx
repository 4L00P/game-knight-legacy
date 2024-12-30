import React from 'react';
import { ListItem } from '@mui/material';

function Game({ game }) {
  return (
    <ListItem>
      {game.name}
    </ListItem>
  );
}

export default Game;
