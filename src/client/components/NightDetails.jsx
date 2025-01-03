import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  AccordionDetails,
  Button,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

function NightDetails({ gameNight }) {
  // Helper function to create a list from props arrays
  const createList = (label, prop, index) => (
    <List>
      <Typography variant="body">{`${label}:`}</Typography>
      {prop.map((value) => (
        <ListItem
          key={`${value}-${index * 2}`}
        >
          <Typography variant="subtitle2">{value}</Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AccordionDetails>
      <Typography variant="subtitle2">Winner:</Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          {createList('Guests', gameNight.guests)}
        </Grid>
        <Grid size={6}>
          {createList('Games', gameNight.games)}
        </Grid>
      </Grid>
      {moment(gameNight.fullDate).isAfter(moment())
        ? <Button variant="contained">Cancel</Button>
        : null}
    </AccordionDetails>
  );
}

NightDetails.propTypes = {
  gameNight: PropTypes.shape({
    guests: PropTypes.arrayOf(PropTypes.string),
    snacks: PropTypes.arrayOf(PropTypes.string),
    games: PropTypes.arrayOf(PropTypes.string),
    fullDate: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default NightDetails;
