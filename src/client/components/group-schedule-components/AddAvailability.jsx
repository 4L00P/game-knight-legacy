import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

// MUI COMPONENTS
import { styled, alpha } from '@mui/material/styles';
import { Paper, InputLabel, Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AddAvailability() {
  // STATES
  const [user, setUser] = useState('');
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [duration, setDuration] = useState('');

  // HELPER TO CHANGE TIME INTO NUMBER
  const timeStringToNumber = (str) => {
    // grab first two numbers as is
    const hours = Number(str.substring(0, 2));
    // change 2nd half into a number - divide by 60
    const minutesStr = str.substring(3, 5);
    const minutes = Number(minutesStr) / 60;
    // change to number with two decimal places
    const timeNum = Number((hours + minutes).toFixed(2));
    return timeNum;
  };

  // STATE CHANGES
  const handleDateInput = (e) => {
    // destructure the date from event
    const { _d } = e;
    // parse the date
    const dateStr = moment(_d.toString().substring(0, 16), 'ddd MMM DD YYYY').format('MM DD YYYY');
    // change the state of date based on user input
    setDate(dateStr);
  };

  const handleStartTimeInput = (e) => {
    // destructure the date from event
    const { _d } = e;
    // parse the time
    const timeStr = moment(_d.toString().slice(16, 24), 'HH:mm:ss').format('HH:mm');
    // change the state of startTime based on user input
    // pass the time string into the helper to get a number
    setTimeStart(timeStringToNumber(timeStr));
  };

  const handleEndTimeInput = (e) => {
    // destructure the date from event
    const { _d } = e;
    // parse the time
    const timeStr = moment(_d.toString().slice(16, 24), 'HH:mm:ss').format('HH:mm');
    // change state of endTime based on user input
    // pass the time string into the helper to get a number
    setTimeEnd(timeStringToNumber(timeStr));
  };

  // useEffect hook to watch the timeEnd state
  useEffect(() => {
    // update duration state by subtracting timeStart from timeEnd
    setDuration(timeEnd - timeStart);
  }, [timeEnd]);

  // useEffect hook on initial render to get the user
  useEffect(() => {
    axios.get('/auth/user')
      .then((userObj) => {
        const { data } = userObj;
        // set the user state
        setUser(data);
      })
      .catch((err) => {
        console.log('could not GET user (client)', err);
      });
  }, []);

  // CRUD OPERATIONS
  const handleSubmit = () => {
    // on submit, send a POST req with the availability to the db
    axios.post('/api/availabilities', {
      scheduling: {
        user,
        date,
        timeStart,
        timeEnd,
        duration,
      },
    })
      .then(() => {
      })
      .catch((err) => {
        console.log('failed to POST an availability', err);
      });
  };

  // const handleDelete = () => {
  //   // send a delete request to get rid of availability
  // };

  // const handleEdit = () => {
  //   // send patch request to server to edit availability
  // };

  // Paper styling
  const Section1 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'row', // change to 'column' if you want them stacked
    alignItems: 'center',
    padding: 20,
    gap: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: 10,
    width: 'fit-content',
    margin: '1rem',
  }));

  return (
    <Section1 elevation={5}>

      <InputLabel>
        add your
        <br />
        availability!
      </InputLabel>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          views={['year', 'month', 'day']}
          label={date}
          onChange={handleDateInput}
          sx={{
            width: 150,
          }}
        />

        <TimePicker
          label={timeStart}
          ampm={false}
          onChange={handleStartTimeInput}
          sx={{
            width: 110,
          }}
        />

        <ArrowForwardIcon />
        <TimePicker
          label={timeEnd}
          ampm={false}
          onChange={handleEndTimeInput}
          sx={{
            width: 110,
          }}
        />
      </LocalizationProvider>

      <Button onClick={handleSubmit} variant="contained" color="secondary">
        ADD
      </Button>

    </Section1>
  );
}
