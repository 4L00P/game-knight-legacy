import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  // AccordionActions,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

function GameCatsAndMechsInfo({ categories, mechanics, setGamesFilter }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandCircleDownTwoToneIcon />}
      >
        <Typography variant="subtitle2">Categories & Mechanics</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Typography variant="subtitle2">Categories:</Typography>
            {
              categories.map((catName) => (
                <Typography
                  variant="subtitle1"
                  key={catName}
                  onClick={() => { setGamesFilter({ categories: [catName] }); }}
                >
                  {catName}
                </Typography>
              ))
            }
          </Grid>
          <Grid size={3}>
            <Typography variant="subtitle2">Mechanics:</Typography>
            {
              mechanics.map((mechName) => (
                <Typography
                  variant="subtitle1"
                  key={mechName}
                  onClick={() => { setGamesFilter({ mechanics: [mechName] }); }}
                >
                  {mechName}
                </Typography>
              ))
            }
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

GameCatsAndMechsInfo.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  mechanics: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGamesFilter: PropTypes.func.isRequired,
};

export default GameCatsAndMechsInfo;
