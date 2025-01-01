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
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import NightDetails from './NightDetails';

function Night({ gameNight, getGameNights }) {
  return (
    <ListItem>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
        >
          <Typography variants="h6">{gameNight.name}</Typography>
        </AccordionSummary>
        <NightDetails
          gameNight={gameNight}
        />
      </Accordion>
    </ListItem>
  );
}

Night.propTypes = {
  gameNight: PropTypes.shape({
    name: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default Night;
