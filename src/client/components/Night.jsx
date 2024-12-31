import React from 'react';
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

export default Night;
