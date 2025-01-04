import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ListItem,
  Accordion,
  AccordionSummary,
  Button,
  Typography,
  TextField,
} from '@mui/material';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import NightDetails from './NightDetails';

const { useState } = React;
function Night({ gameNight, getGameNights }) {
  // Set state value for editing an event
  const [editingName, setEditingName] = useState(false);
  const [event, setEvent] = useState(gameNight);

  // PATCH edited event name
  const patchName = (element) => {
    console.log('PatchName called');
    // Change the editingName value in state
    setEditingName(false);
    // Grab the new name and the event id
    const { _id } = gameNight;
    const { value } = element.target;
    // Build config to send
    const config = {
      newDocument: { name: value },
    };
    // Send an axios PATCH req
    axios.patch(`/api/game-nights/${_id}`, config)
    // Cause page rerender
      .then(getGameNights)
      .catch((err) => {
        console.error('Error patching event name: ', err);
      });
  };

  // Handle change in textField
  const handleChange = (element) => {
    // Grab the new value
    const { value } = element.target;
    // Make a copy of the evenet object from state
    const eventCopy = { ...event };
    // Change the name in gameNight to value
    eventCopy.name = value;
    // Change the state of event to the new object
    setEvent(eventCopy);
  };
  return (
    <ListItem>
      <Accordion sx={{ width: 3 / 4 }}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
          justify="space-between"
        >
          {
            !editingName
              ? (
                <Typography
                  variant="h6"
                  sx={{ marginRight: 'auto', '&:hover': { color: 'grey' } }}
                  onClick={() => { setEditingName(true); }}
                >
                  {gameNight.name}
                </Typography>
              ) : (
                <TextField
                  value={event.name}
                  sx={{ marginRight: 'auto' }}
                  onChange={handleChange}
                  onBlur={(element) => { patchName(element); }}
                  autoFocus
                />
              )
}
          <Typography
            sx={{ paddingRight: 2.5 }}
          >
            {
            gameNight.isCancelled
              ? 'Cancelled'
              : moment(gameNight.fullDate).calendar(
                null,
                {
                  sameDay: '[Today at] h:mm',
                  nextDay: '[Tomorrow at] h:mm',
                  nextWeek: 'dddd [at] h:mm',
                  sameElse: 'dddd, MMMM Do',
                },
              )
          }
          </Typography>
        </AccordionSummary>
        <NightDetails
          gameNight={gameNight}
          getGameNights={getGameNights}
        />
      </Accordion>
      <Button>Edit</Button>
    </ListItem>
  );
}

Night.propTypes = {
  gameNight: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.string),
    fullDate: PropTypes.instanceOf(Date),
    date: PropTypes.string,
    time: PropTypes.string,
    isCancelled: PropTypes.bool,
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default Night;
