import React from 'react';
import axios from 'axios';
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

function NightDetails({ gameNight, getGameNights }) {
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

  // Handle deletion of a gameNight from the database
  const handleNightDelete = () => {
    // Grab the id from the night
    const { _id } = gameNight;
    // Alert the user to make sure they want to delete the event

    // Make axios DELETE req to api/game-nights/:id
    axios.delete(`/api/game-nights/${_id}`)
    // Make call to server to get update GameNights
      .then(getGameNights)
      .catch((err) => {
        console.error('Error deleting event: ', err);
      });
  };
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
        {moment(gameNight.fullDate).isAfter(moment())
          ? (
            <Button
              variant="contained"
              size="small"
              sx={{ marginRight: 'auto' }}
            >
              Cancel
            </Button>
          )
          : null}
        <Button
          variant="contained"
          size="small"
          onClick={handleNightDelete}
        >
          Delete
        </Button>
      </Grid>
    </AccordionDetails>
  );
}

NightDetails.propTypes = {
  gameNight: PropTypes.shape({
    _id: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.string),
    snacks: PropTypes.arrayOf(PropTypes.string),
    games: PropTypes.arrayOf(PropTypes.string),
    fullDate: PropTypes.instanceOf(Date),
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default NightDetails;
