import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionDetails,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

function NightDetails({ gameNight }) {
  // Helper function to create a list from props arrays
  const createList = (label, prop, index) => (
    <List>
      <Typography variant="subtitle1">{`${label}:`}</Typography>
      {prop.map((value) => (
        <ListItem
          key={`${value}-${index * 2}`}
        >
          {value}
        </ListItem>
      ))}
    </List>
  );

  return (
    <AccordionDetails>
      <Typography variant="subtitle1">Winner:</Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          {createList('Guests', gameNight.guests)}
        </Grid>
        <Grid size={6}>
          {createList('Games', gameNight.games)}
        </Grid>
      </Grid>
    </AccordionDetails>
  );
}

NightDetails.propTypes = {
  gameNight: PropTypes.shape({
    guests: PropTypes.arrayOf(PropTypes.string),
    snacks: PropTypes.arrayOf(PropTypes.string),
    games: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default NightDetails;
