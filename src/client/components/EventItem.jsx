import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Typography,
  Divider,
} from '@mui/material';

function EventItem() {
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

export default EventItem;
