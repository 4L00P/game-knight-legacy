import React from "react";
import { useState } from "react";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddAvailability() {
  // STATES
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // STATE CHANGES
  const handleDateInput = () => {
    // change the state of date based on user input
  };

  const handleStartTimeInput = () => {
    // change the state of startTime based on user input
  };

  const handleEndTimeInput = () => {
    // change the state of endTime based on user input
  };

  // CRUD OPERATIONS
  const handleSubmit = () => {
    // send a post request with the times to the database
    // use axios.post
  };

  const handleDelete = () => {
    // send a delete request to get rid of availability
  };

  const handleEdit = () => {
    // send patch request to server to edit availability
  };

  const Section1 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'center',
    padding: 10,
    gap: theme.spacing(2),
    backgroundColor: '#EDFAFF',
    borderRadius: 10,
    // width: 'fit-content',
    maxWidth: '25%',
    margin: '1rem',
  }));

  return (
    <Section1>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <p>ADD YOUR AVAILABILITY</p>
        <DateTimePicker views={['year', 'month', 'day']} />
        <TimePicker label="Start time" />
        <TimePicker label="End time" />
      </LocalizationProvider>
    </Section1>
  );
}
