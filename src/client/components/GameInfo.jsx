import React from 'react';
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
} from '@mui/material';
import Grid from '@mui/material/Grid2';

function GameInfo({ game }) {
  const {
    description,
    yearPublished,
    minPlayers,
    maxPlayers,
    playTime,
    minAge,
    notes,
    rating,
  } = game;
  return (
    <Box>
      <Accordion>
        <AccordionSummary>
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
      <Accordion>
        <AccordionSummary>
          <Typography variant="subtitle2">Rating & Notes:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={3}>
              <Typography variant="subtitle2">Rating:</Typography>
              <Rating defaultValue={rating} precision={0.5} max={5} />
            </Grid>
            <Grid size={9}>
              <Typography variant="subtitle2">Notes:</Typography>
              <Typography variant="subtitle1">{notes}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <Button>Update</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="subtitle2">Description:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {description.split('\n').map((line, i) => (
            <Typography
              key={`${line.slice(0, 10)} - ${i * Math.random()}`}
              variant="subtitle1"
              style={{ paddingTop: 5, paddingBottom: 5 }}
            >
              {line}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

GameInfo.propTypes = {
  game: PropTypes.shape({
    description: PropTypes.string,
    yearPublished: PropTypes.number,
    minPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
    playTime: PropTypes.number,
    minAge: PropTypes.number,
    notes: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default GameInfo;
