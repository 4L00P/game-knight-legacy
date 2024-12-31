import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

import GameInfo from './GameInfo';

const { useState } = React;

function Game({ game }) {
  // Destructure name & thumbnail from the game object
  const { name, thumbnail } = game;
  // showGameInfo will determine whether or not the additional information is rendered to the page
  const [showGameInfo, setShowGameInfo] = useState(false);
  /**
   * Accordion hides additional information behind a click
   * AccordionSummary displays the game image and game name without having to click
   *  - expandIcon: The icon displayed to the user to let him know that the accordion expands
   *  - onClick: Toggles the showGameInfo boolean state
   * AccordionDetails displays the GameInfo component with the game object passed to it
   *  - Only renders when the accordion is clicked to help with the speed of the app
   * AccordionActions displays the button that can remove the game from the collection.
   */
  return (
    <ListItem>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
          onClick={() => { setShowGameInfo(!showGameInfo); }}
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
          {showGameInfo ? <GameInfo game={game} /> : null}
        </AccordionDetails>
        <AccordionActions>
          <Button>REMOVE GAME</Button>
        </AccordionActions>
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
