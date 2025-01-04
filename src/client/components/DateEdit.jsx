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
  placeHolder,
  blurEvent,
}) {
  // PATCH the date or time in the database
  const patchEventDate = (element) => {
    // Grab the key from the element
    const { key } = element;
    if (key === 'Enter') {
    // Grab the id from gameNight and value from the element
      const { _id } = gameNight;
      const { value } = element.target;
      // Check editingDate and editingTime values to know what config to send
      const config = editingDate
        ? {
          newDocument: {
            fullDate: moment(`${value} ${gameNight.time}`, 'MM/DD/YY h:mm').format(),
            date: moment(value, 'MM/DD/YY').format('dddd, MMMM Do YYYY'),
          },
        }
        : {
          newDocument: {
            fullDate: moment(`${gameNight.date} ${value}`, 'dddd, MMMM Do YYYY h:mm').format(),
            time: value,
          },
        };
      console.log('Config: ', config);
      // Make axios patch request with the id
      axios.patch(`/api/game-nights/${_id}`, config)
        .then(getGameNights)
        .then(() => { setEditingDate(false); })
        .then(() => { setEditingTime(false); })
        .catch((err) => {
          console.error('Error patching the date: ', err);
        });
    }
  };
  return (
    <TextField
      placeholder={placeHolder}
      helperText="Enter to save"
      onKeyUp={patchEventDate}
      onBlur={blurEvent}
      autoFocus
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
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
  editingDate: PropTypes.bool.isRequired,
  editingTime: PropTypes.bool.isRequired,
  setEditingDate: PropTypes.func.isRequired,
  setEditingTime: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  blurEvent: PropTypes.func.isRequired,
};

export default DateEdit;
