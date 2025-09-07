import React from "react";
import { useState } from "react";
import axios from 'axios';

// MUI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddAvailability() {
  // STATES
  const [date, setDate] = useState({});
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState('');

  // STATE CHANGES
  const handleDateInput = (e) => {
    // get date from the input
    // const dateStr = e._d.toString().substring(0, 16);

    // change the state of date based on user input
    setDate(e._d);
  };
  console.log('date state:', date);

  const handleStartTimeInput = (e) => {
    // change the state of startTime based on user input
    setStartTime(e._d);
  };
  console.log('startTime state:', startTime);

  const handleEndTimeInput = (e) => {
    // change the state of endTime based on user input
    setEndTime(e._d);
  };
  console.log('endTime state:', endTime);

  const Section1 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'center',
    padding: 20,
    gap: theme.spacing(2),
    backgroundColor: '#EDFAFF',
    borderRadius: 10,
    // width: 'fit-content',
    maxWidth: '25%',
    margin: '1rem',
  }));

  return (
    <Section1>

      <InputLabel> add your availability </InputLabel>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          views={['year', 'month', 'day']}
          onChange={handleDateInput}
        />
        <TimePicker
          label="Start time"
          ampm={false}
          onChange={handleStartTimeInput}
        />
        <TimePicker
          label="End time"
          ampm={false}
          onChange={handleEndTimeInput}
        />
      </LocalizationProvider>

      <Button variant="contained" color="secondary"> ADD </Button>
    </Section1>
  );
}

// // CRUD OPERATIONS

// const handleSubmit = () => {
//   // send a post request with the times to the database
//   // use axios.post
// };

// const handleDelete = () => {
//   // send a delete request to get rid of availability
// };

// const handleEdit = () => {
//   // send patch request to server to edit availability
// };
