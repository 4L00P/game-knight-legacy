import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Typography,
} from '@mui/material';

function Night({ gameNight, getGameNights }) {
  return (
    <ListItem>{gameNight.name}</ListItem>
  );
}

Night.propTypes = {
  gameNight: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default Night;
