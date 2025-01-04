import React from 'react';
import axios from 'axios';
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
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

import GameInfo from './GameInfo';

const { useState } = React;

function Game({ game, getGames, setGamesFilter }) {
  // Destructure name & thumbnail from the game object
  const { _id, name, thumbnail } = game;
  // showGameInfo will determine whether or not the additional information is rendered to the page
  const [showGameInfo, setShowGameInfo] = useState(false);

  // Send DELETE request to /api/games/:id to remove game from DB
  const deleteGame = () => {
    axios.delete(`/api/games/${_id}`)
      // Success, call getGames to update the Home views state
      .then(getGames)
      // Failure, log error
      .catch((err) => {
        console.error('Failed to deleteGame:', err);
      });
  };

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
      <Accordion
        className="outer-accordion"
      >
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
          {
            showGameInfo
              ? (
                <GameInfo
                  game={game}
                  getGames={getGames}
                  setGamesFilter={setGamesFilter}
                />
              )
              : null
          }
        </AccordionDetails>
        <AccordionActions>
          <Button
            className="delete-button"
            onClick={deleteGame}
          >
            REMOVE
          </Button>
        </AccordionActions>
      </Accordion>
    </ListItem>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  getGames: PropTypes.func.isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default Game;
