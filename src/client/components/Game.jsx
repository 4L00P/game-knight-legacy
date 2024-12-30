import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

function Game({ game }) {
  const { name, thumbnail } = game;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={thumbnail} />
      </ListItemAvatar>
      <ListItemText>
        {name}
      </ListItemText>
    </ListItem>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default Game;
