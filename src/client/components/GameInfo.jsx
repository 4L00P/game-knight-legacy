import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  Rating,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

// Child components:
import GameCatsAndMechsInfo from './game-info-components/GameCatsAndMechsInfo';
import GameDescriptionInfo from './game-info-components/GameDescriptionInfo';

function GameInfo({ game, getGames, setGamesFilter }) {
  // Destructure important info from the game object
  const {
    _id,
    description,
    yearPublished,
    minPlayers,
    maxPlayers,
    playTime,
    minAge,
    categories,
    mechanics,
  } = game;

  // Create state for updateForm, notes, & rating
  const [updateFormStatus, setUpdateFormStatus] = useState(false);
  const [notes, setNotes] = useState(game.notes);
  const [rating, setRating] = useState(game.rating);

  // Toggles the update form status to be able to update information
  const handleUpdateFormStatusToggle = () => {
    setUpdateFormStatus(!updateFormStatus);
  };

  // Handles the click event to update rating's state
  const handleRatingClick = ({ target }) => {
    // Check if there's a value on target
    if (target.value) {
      // Update the state of rating with the number (it will initially be a string)
      setRating(+(target.value));
    }
  };

  // Handles the on change event to update note's state
  const handleNotesChange = ({ target }) => {
    setNotes(target.value);
  };

  // Send PATCH request to /api/games/:id to update game's rating & notes
  const patchRatingNotes = () => {
    axios.patch(`/api/games/${_id}`, { game: { rating, notes } })
      // Success:
      // Invoke getGames to update the state of Home view so data persists after closing accordion
      .then(getGames)
      // Failure, log error
      .catch((err) => {
        console.error('Failed to patchRatingNotes:', err);
      });
  };

  // Handles the onKeyUp event to submit an PATCH request on enter
  const handleNotesEnterPress = ({ key }) => {
    if (key === 'Enter') {
      // Toggle updateFormStatus first to lock in the state for the PATCH request
      handleUpdateFormStatusToggle();
      // Send PATCH request with the current state of rating and notes
      patchRatingNotes();
    }
  };

  /**
   * Box helps to contain all of the accordions.
   *
   * Accordion #1: General Info
   *  - Contains a grid of information about the game:
   *    (1) The year it was published
   *    (2) The number of players that can play the game.
   *    (3) The average amount of time the game will take to play.
   *    (4) The minimum age recommended to play the game.
   *
   * Accordion #2: Rating & Notes
   *  - Contains a grid of information that the user can update:
   *    (1) The user can rate the game from 0 to 5 stars
   *    (2) The user can save any notes they have about the game
   *  - An UPDATE action is included to make the details available to update
   *  - A SAVE action will save changes to the database
   *
   * Accordion #3: Description
   *  - The description can be quite long, so it is contained in its own accordion
   *  - The description is split by line-breaks and separated into different Typography(s)
   *    to show the line breaks to the user.
   */
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
        >
          <Typography variant="subtitle2">General Info:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={3}>
              <Typography variant="subtitle2">Year:</Typography>
              <Typography variant="subtitle1">{yearPublished}</Typography>
            </Grid>
            <Grid size={3}>
              <Typography variant="subtitle2">Players:</Typography>
              <Typography variant="subtitle1">{`${minPlayers} - ${maxPlayers}`}</Typography>
            </Grid>
            <Grid size={3}>
              <Typography variant="subtitle2">Playtime:</Typography>
              <Typography variant="subtitle1">{`${playTime} minutes`}</Typography>
            </Grid>
            <Grid size={3}>
              <Typography variant="subtitle2">Minimum Age:</Typography>
              <Typography variant="subtitle1">{`${minAge} years old`}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <GameCatsAndMechsInfo
        categories={categories}
        mechanics={mechanics}
        setGamesFilter={setGamesFilter}
      />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
        >
          <Typography variant="subtitle2">Rating & Notes:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={3}>
              <Typography variant="subtitle2">Rating:</Typography>
              <Rating
                readOnly={!updateFormStatus}
                value={rating}
                onClick={handleRatingClick}
                precision={0.5}
                max={5}
              />
            </Grid>
            <Grid size={9}>
              <Typography variant="subtitle2">Notes:</Typography>
              {
                updateFormStatus
                  ? (
                    <TextField
                      variant="outlined"
                      helperText="What did you like/dislike? Any house rules? Any fun moments?"
                      fullWidth
                      multiline
                      value={notes}
                      onChange={handleNotesChange}
                      onKeyUp={handleNotesEnterPress}
                    />
                  )
                  : <Typography variant="subtitle1">{notes}</Typography>
              }
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          {
          updateFormStatus
            ? (
              <Button
                className="update-button"
                onClick={() => {
                  patchRatingNotes();
                  handleUpdateFormStatusToggle();
                }}
              >
                SAVE
              </Button>
            )
            : (
              <Button
                className="update-button"
                onClick={handleUpdateFormStatusToggle}
              >
                UPDATE
              </Button>
            )
          }
        </AccordionActions>
      </Accordion>

      <GameDescriptionInfo description={description} />
    </Box>
  );
}

GameInfo.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    yearPublished: PropTypes.number,
    minPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
    playTime: PropTypes.number,
    minAge: PropTypes.number,
    notes: PropTypes.string,
    rating: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    mechanics: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  getGames: PropTypes.func.isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default GameInfo;
