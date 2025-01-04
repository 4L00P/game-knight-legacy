import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  TextField,
} from '@mui/material';

const { useState } = React;

function DateEdit() {
  return (
    <TextField
      sx={{
        width: 115,
        '& .MuiInputBase-root': {
          height: 30,
        },
      }}
    />
  );
}

export default DateEdit;
