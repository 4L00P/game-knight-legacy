import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameCatsAndMechsInfo({ categories, mechanics, setGamesFilter }) {
  return (
    <Accordion
      className="inner-accordion"
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDownTwoToneIcon />}
      >
        <Typography variant="subtitle2">Categories & Mechanics</Typography>
      </AccordionSummary>
      <AccordionDetails
        className="inner-accordion-details"
      >
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="subtitle2">Categories:</Typography>
            {
              categories.map((catName) => (
                <Button
                  variant="text"
                  key={catName}
                  onClick={() => { setGamesFilter({ categories: [catName] }); }}
                >
                  {catName}
                </Button>
              ))
            }
          </Grid>
          <Grid size={6}>
            <Typography variant="subtitle2">Mechanics:</Typography>
            {
              mechanics.map((mechName) => (
                <Button
                  variant="text"
                  key={mechName}
                  onClick={() => { setGamesFilter({ mechanics: [mechName] }); }}
                >
                  {mechName}
                </Button>
              ))
            }
          </Grid>
        </Grid>
      </AccordionDetails>
      <AccordionActions
        style={{ justifyContent: 'center' }}
      >
        <Typography
          variant="subtitle1"
        >
          ---- CLICK A CATEGORY/MECHANIC TO FILTER YOUR COLLECTION ----
        </Typography>
      </AccordionActions>
    </Accordion>
  );
}

GameCatsAndMechsInfo.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  mechanics: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default GameCatsAndMechsInfo;
