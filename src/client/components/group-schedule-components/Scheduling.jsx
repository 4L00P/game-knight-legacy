import React from "react";

import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddAvailability from './AddAvailability';
import AvailabilityChart from './AvailabilityChart';

export default function Scheduling() {
  const Section2 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'left',
    padding: 10,
    // gap: theme.spacing(2),
    backgroundColor: '#EDFAFF',
    borderRadius: 10,
    // width: 'fit-content',
    maxWidth: '50%',
    margin: '1rem',
  }));

  return (
    <>

      <AddAvailability />

      <Section2>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <AvailabilityChart />
      </Section2>
    </>
  );
}
