import React from 'react';
import { List } from '@mui/material';

import Game from './Game';

function GamesList({ games }) {
  return (
    <List>
      {games.map((game) => (
        <Game
          key={game._id}
          game={game}
        />
      ))}
    </List>
  );
}

export default GamesList;
