import React from "react";

// MUI
// import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
import { InputLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// COMPONENTS
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

        <br />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <InputLabel> select to change graph view </InputLabel>
          <DateTimePicker views={['year', 'month', 'day']} />
        </LocalizationProvider>

        <br />

        <AvailabilityChart />

      </Section2>
    </>
  );
}
