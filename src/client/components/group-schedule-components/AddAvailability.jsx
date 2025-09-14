import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

// MUI
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddAvailability({elevation}) {
  // STATES
  const [user, setUser] = useState('');
  const [date, setDate] = useState('MM DD YYYY');
  const [timeStart, setTimeStart] = useState('HH:MM');
  const [timeEnd, setTimeEnd] = useState('HH:MM');

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
    setTimeStart(timeStr);
  };

  const handleEndTimeInput = (e) => {
    // destructure the date from event
    const { _d } = e;
    // parse the time
    const timeStr = moment(_d.toString().slice(16, 24), 'HH:mm:ss').format('HH:mm');

    // change state of endTime based on user input
    setTimeEnd(timeStr);
  };

  useEffect(() => {
    axios.get('/auth/user')
      .then((userObj) => {
        const { data } = userObj;
        // const { name } = userObj.data;
        setUser(data);
      })
      .catch((err) => {
        console.log('could GET user (client)', err);
      });
  }, []);

  // CRUD OPERATIONS
  const handleSubmit = () => {
    // send a post request with the times to the database
    // use axios.post

    axios.post('/api/availabilities', {
      scheduling: {
        user,
        date,
        timeStart,
        timeEnd,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleDelete = () => {
  //   // send a delete request to get rid of availability
  // };

  const Section1 = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'center',
    padding: 20,
    gap: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: 10,
    // width: 'fit-content',
    maxWidth: '25%',
    margin: '1rem',
  }));

  return (
    <Section1 elevation={5}>

      <InputLabel> add your availability </InputLabel>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          views={['year', 'month', 'day']}
          label={date}
          onChange={handleDateInput}
        />
        <TimePicker
          label={timeStart}
          ampm={false}
          onChange={handleStartTimeInput}
        />
        <TimePicker
          label={timeEnd}
          ampm={false}
          onChange={handleEndTimeInput}
        />
      </LocalizationProvider>

      <Button onClick={handleSubmit} variant="contained" color="secondary">
        ADD
      </Button>

    </Section1>
  );
}


// const handleEdit = () => {
//   // send patch request to server to edit availability
// };
