import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  // AccordionActions,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameGeneralInfo({
  yearPublished,
  minPlayers,
  maxPlayers,
  playTime,
  minAge,
}) {
  return (
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
  );
}

GameGeneralInfo.propTypes = {
  yearPublished: PropTypes.number.isRequired,
  minPlayers: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  playTime: PropTypes.number.isRequired,
  minAge: PropTypes.number.isRequired,
};

export default GameGeneralInfo;
