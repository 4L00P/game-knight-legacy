import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

import GameInfo from './GameInfo';

function Game({ game }) {
  const { name, thumbnail } = game;
  return (
    <ListItem>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
        >
          <Avatar src={thumbnail} />
          <Typography
            variant="subtitle2"
            style={{ padding: 8 }}
          >
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GameInfo game={game} />
        </AccordionDetails>
      </Accordion>
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
