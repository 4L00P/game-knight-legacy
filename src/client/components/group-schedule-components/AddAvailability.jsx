// BRAINSTORM //
// need a date picker:
// need a time picker:

/* previous group used these
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
*/

import React from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddAvailability() {
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
