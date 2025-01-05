import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameDescriptionInfo({ description }) {
  /**
   * Accordion #4: Description
   *  - The description can be quite long, so it is contained in its own accordion
   *  - The description is split by line-breaks and separated into different Typography(s)
   *    to show the line breaks to the user.
   */
  return (
    <Accordion
      className="inner-accordion"
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDownTwoToneIcon />}
      >
        <Typography variant="subtitle2">Description:</Typography>
      </AccordionSummary>
      <AccordionDetails
        className="inner-accordion-details"
      >
        {description.split('\n').map((line, i) => (
          <Typography
            key={`${line.slice(0, 10)} - ${i * Math.random()}`}
            variant="subtitle1"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            {line}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

GameDescriptionInfo.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GameDescriptionInfo;
