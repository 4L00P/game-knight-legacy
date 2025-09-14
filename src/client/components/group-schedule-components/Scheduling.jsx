import React from "react";
import { useState } from "react";
import moment from "moment";

// MUI COMPONENTS
import { Fab, InputLabel, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled, alpha } from '@mui/material/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// COMPONENTS
import AddAvailability from './AddAvailability';
import AvailabilityChart from './AvailabilityChart';

export default function Scheduling() {
  // STATE
  const [dayView, setDayView] = useState(moment().format('MM DD YYYY'));

  // STATE CHANGES
  const handleDateInput = (e) => {
    // destructure the date from event
    const { _d } = e;
    // change the state of date based on user input
    const dateStr = moment(_d.toString().substring(0, 16), 'ddd MMM DD YYYY').format('MM DD YYYY');
    setDayView(dateStr);
  };

  const Section2 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'left',
    padding: 10,
    gap: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: 10,
    // width: 'fit-content',
    maxWidth: '50%',
    margin: '1rem',
  }));

  return (
    <>

      <AddAvailability />

      <Section2 elevation={5}>

        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>

        <br />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <InputLabel> select to change graph view </InputLabel>
          <DateTimePicker views={['year', 'month', 'day']} onChange={handleDateInput} />
        </LocalizationProvider>

        <br />

        <AvailabilityChart day={dayView} />

      </Section2>
    </>
  );
}
