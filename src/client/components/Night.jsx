import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
      <Accordion sx={{ width: 3 / 4 }}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownTwoToneIcon />}
          justify="space-between"
        >
          <Typography variant="h6" sx={{ marginRight: 'auto' }}>{gameNight.name}</Typography>
          <Typography
            sx={{ paddingRight: 2.5 }}
          >
            {
              moment(gameNight.fullDate).calendar(
                null,
                {
                  sameDay: '[Today at] h:mm',
                  nextDay: '[Tomorrow at] h:mm',
                  nextWeek: 'dddd [at] h:mm',
                  sameElse: 'dddd, MMMM Do',
                },
              )
          }
          </Typography>
        </AccordionSummary>
        <NightDetails
          gameNight={gameNight}
          getGameNights={getGameNights}
        />
      </Accordion>
    </ListItem>
  );
}

Night.propTypes = {
  gameNight: PropTypes.shape({
    name: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.string),
    fullDate: PropTypes.instanceOf(Date),
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default Night;
