import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Rating,
  TextField,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import CasinoIcon from '@mui/icons-material/Casino';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameRatingAndNotesInfo({
  _id,
  rating,
  notes,
  getGames,
}) {
  // Create state for updateForm, notes, & rating
  const [updateFormStatus, setUpdateFormStatus] = useState(false);
  const [formNotes, setFormNotes] = useState(notes);
  const [formRating, setFormRating] = useState(rating);

  // Toggles the update form status to be able to update information
  const handleUpdateFormStatusToggle = () => {
    setUpdateFormStatus(!updateFormStatus);
  };

  // Handles the click event to update rating's state
  const handleRatingClick = ({ target }) => {
    // Check if there's a value on target
    if (target.value) {
      // Update the state of rating with the number (it will initially be a string)
      setFormRating(+(target.value));
    }
  };

  // Handles the on change event to update note's state
  const handleNotesChange = ({ target }) => {
    setFormNotes(target.value);
  };

  // Send PATCH request to /api/games/:id to update game's rating & notes
  const patchRatingNotes = () => {
    axios.patch(`/api/games/${_id}`, { game: { rating: formRating, notes: formNotes } })
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
      // Send PATCH request with the current state of rating and notes
      patchRatingNotes();
      // Toggle updateFormStatus first to lock in the state for the PATCH request
      handleUpdateFormStatusToggle();
    }
  };

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  /**
   * Accordion #3: Rating & Notes
   *  - Contains a grid of information that the user can update:
   *    (1) The user can rate the game from 0 to 5 stars
   *    (2) The user can save any notes they have about the game
   *  - An UPDATE action is included to make the details available to update
   *  - A SAVE action will save changes to the database
   */
  return (
    <Accordion
      className="inner-accordion"
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDownTwoToneIcon />}
      >
        <Typography variant="subtitle2">Rating & Notes:</Typography>
      </AccordionSummary>
      <AccordionDetails
        className="inner-accordion-details"
      >
        <Grid container spacing={2}>
          <Grid size={3}>
            <Typography variant="subtitle2">Rating:</Typography>
            <StyledRating
              readOnly={!updateFormStatus}
              value={formRating}
              onClick={handleRatingClick}
              precision={0.5}
              max={5}
              icon={<CasinoIcon />}
              emptyIcon={<CasinoOutlinedIcon />}
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
                    value={formNotes}
                    onChange={handleNotesChange}
                    onKeyDown={handleNotesEnterPress}
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
              color="update"
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
              color="update"
              onClick={handleUpdateFormStatusToggle}
            >
              UPDATE
            </Button>
          )
        }
      </AccordionActions>
    </Accordion>
  );
}

GameRatingAndNotesInfo.propTypes = {
  _id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  notes: PropTypes.string.isRequired,
  getGames: PropTypes.func.isRequired,
};

export default GameRatingAndNotesInfo;
