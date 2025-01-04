import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  TextField,
} from '@mui/material';

const { useState } = React;

function DateEdit({
  gameNight,
  getGameNights,
  editingDate,
  editingTime,
  setEditingDate,
  setEditingTime,
  label,
}) {
  // PATCH the date or time in the database
  const patchEventDate = (element) => {
    // Grab the key from the element
    const { key } = element;
    if (key === 'Enter') {
    // Grab the id from gameNight and value from the element
      const { _id } = gameNight;
      const { value } = element.target;
      // Set the values of the new fullDate and date for the database using moment
      const fullDate = moment(value, 'MM/DD/YY').format();
      const date = moment(value, 'MM/DD/YY').format('dddd, MMMM Do YYYY');
      // Build the config based on field
      const config = {
        newDocument: {
          fullDate,
          date,
        },
      };
      // Make axios patch request with the id
      axios.patch(`/api/game-nights/${_id}`, config)
        .then(getGameNights)
        .then(() => { setEditingDate(false); })
        .catch((err) => {
          console.error('Error patching the date: ', err);
        });
    }
  };
  return (
    <TextField
      placeholder={label}
      helperText="Enter to save"
      onKeyUp={patchEventDate}
      sx={{
        width: 115,
        '& .MuiInputBase-root': {
          height: 30,
        },
      }}
    />
  );
}

DateEdit.propTypes = {
  gameNight: PropTypes.shape({

  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
  editingDate: PropTypes.bool.isRequired,
  editingTime: PropTypes.bool.isRequired,
  setEditingDate: PropTypes.func.isRequired,
  setEditingTime: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default DateEdit;
