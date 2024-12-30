import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
} from '@mui/material';

import GameInfo from './GameInfo';

const { useState } = React;

function Game({ game }) {
  const { name, thumbnail } = game;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Stack spacing={2}>
      <ListItem
        onClick={() => { setShowInfo(!showInfo); }}
      >
        <ListItemAvatar>
          <Avatar src={thumbnail} />
        </ListItemAvatar>
        <ListItemText>
          {name}
        </ListItemText>
      </ListItem>
      {
        showInfo
          ? (
            <ListItem>
              <GameInfo game={game} />
            </ListItem>
          )
          : null
      }
    </Stack>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default Game;
