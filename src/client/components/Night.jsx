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

function Night({ gameNight, getGameNights }) {
  return (
    <ListItem>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
        >
          {gameNight.name}
        </AccordionSummary>
      </Accordion>
    </ListItem>
  );
}

Night.propTypes = {
  gameNight: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default Night;
