import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameGeneralInfo({
  yearPublished,
  minPlayers,
  maxPlayers,
  bestWith,
  recommendedWith,
  playTime,
  minAge,
}) {
  /**
   * Accordion #1: General Info
   *  - Contains a grid of information about the game:
   *    (1) The year it was published
   *    (2) The average amount of time the game will take to play.
   *    (3) The minimum age recommended to play the game.
   *    (4) The number of players that can play the game.
   *    (5) The best number of players to play with
   *    (6) The recommended number of players to play with.
   *  - All data here is conditionally shown if there is data from BGG available
   */
  return (
    <Accordion
      className="inner-accordion"
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDownTwoToneIcon />}
      >
        <Typography variant="subtitle2">General Info:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {yearPublished
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Year:</Typography>
                <Typography variant="subtitle1">{yearPublished}</Typography>
              </Grid>
            ) : null}
          {playTime
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Playtime:</Typography>
                <Typography variant="subtitle1">{`${playTime} minutes`}</Typography>
              </Grid>
            ) : null}
          {minAge
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Minimum Age:</Typography>
                <Typography variant="subtitle1">{`${minAge} years old`}</Typography>
              </Grid>
            ) : null}
          {minPlayers || maxPlayers
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Players:</Typography>
                <Typography variant="subtitle1">{`${minPlayers} - ${maxPlayers}`}</Typography>
              </Grid>
            ) : null}
          {bestWith
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Best With:</Typography>
                <Typography variant="subtitle1">
                  {bestWith.replace('Best with ', '')}
                </Typography>
              </Grid>
            ) : null}
          {recommendedWith
            ? (
              <Grid size={4}>
                <Typography variant="subtitle2">Recommended With:</Typography>
                <Typography variant="subtitle1">
                  {recommendedWith.replace('Recommended with ', '')}
                </Typography>
              </Grid>
            ) : null}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

GameGeneralInfo.propTypes = {
  yearPublished: PropTypes.number.isRequired,
  minPlayers: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  bestWith: PropTypes.string.isRequired,
  recommendedWith: PropTypes.string.isRequired,
  playTime: PropTypes.number.isRequired,
  minAge: PropTypes.number.isRequired,
};

export default GameGeneralInfo;
