import React from "react";
import { useState } from "react";
import axios from 'axios';

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

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <br />
      <p>ADD YOUR AVAILABILITY</p>
      <p>day</p>
      <DateTimePicker views={['year', 'month', 'day']} />
      <p>start time - end time</p>
      <TimePicker label="Basic time picker" />
      <TimePicker label="Basic time picker" />
    </LocalizationProvider>
  );
}
