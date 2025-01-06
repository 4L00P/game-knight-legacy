import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Grid from '@mui/material/Grid2';
import { Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function CalendarField({
  formValues,
  setFormValues,
  handleFinalClick,
  closeForm,
}) {
  const handleDateChange = (element) => {
    // Make a copy of formValues from state
    const formCopy = { ...formValues };
    // Grab the date and time off the element
    const { _d } = element;
    // Format the date and time using moment
    // Pass in the date string with the curr format into moment() and the desired format in .format
    const date = moment(_d.toString().slice(0, 15), 'ddd MMM DD YYYY').format('dddd, MMMM Do YYYY');
    const time = moment(_d.toString().slice(16, 24), 'HH:mm:ss').format('h:mm');
    // Assign the new date and time to the copy of formValues
    formCopy.fullDate = _d;
    formCopy.date = date;
    formCopy.time = time;
    // Set the new formValues in state
    setFormValues(formCopy);
  };
  return (
    <>
      <Grid size={5}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            onChange={handleDateChange}
            label="Select a Date"
            sx={{ pb: 2 }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid size={3}>
        <Button
          variant="contained"
          onClick={handleFinalClick}
          size="small"
        >
          LET&apos;S PLAY
        </Button>
        <Button
          variant="contained"
          onClick={closeForm}
          size="small"
        >
          Cancel
        </Button>
      </Grid>
    </>
  );
}

CalendarField.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  setFormValues: PropTypes.func.isRequired,
  handleFinalClick: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default CalendarField;
