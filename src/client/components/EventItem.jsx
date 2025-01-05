import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Typography,
  Divider,
} from '@mui/material';

function EventItem({ value }) {
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{ pl: 7 }}
      >
        {value}
      </Typography>
      <Divider />
    </>
  );
}

EventItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default EventItem;
