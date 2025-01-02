import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment'
import {
  FormControl,
  Box,
  Button,
  List,
  Typography,
} from '@mui/material';
import InputField from './InputField';
import DividedListItem from './DividedListItem';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const { useState } = React;

// Style for divided list
const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

const initialInputs = [
  {
    label: 'Name',
    value: '',
    collection: 'name',
    helperText: 'Name your event',
  },
  {
    label: 'Guest',
    value: '',
    collection: 'guests',
    helperText: 'Add a guest',
  },
  {
    label: 'Snack',
    value: '',
    collection: 'snacks',
    helperText: 'Refreshments',
  },
  {
    label: 'Game',
    value: '',
    collection: 'games',
    helperText: 'What are you playing?',
  },
];

// Keep array of the collections to be iterated over later
const inputKeys = ['guests', 'snacks', 'games'];

function GameNightForm({ closeForm, getGameNights }) {
  // Initialize the state of the component
  const [formValues, setFormValues] = useState({
    name: '',
    guests: [],
    snacks: [],
    games: [],
    date: '',
    time: '',
  });
  // State object to hold the input objects from initialInputs above (line 14)
  const [inputValues, setInputValues] = useState([
    {
      label: 'Name',
      value: '',
      collection: 'name',
      helperText: 'Name your event',
    },
    {
      label: 'Guest',
      value: '',
      collection: 'guests',
      helperText: 'Add a guest',
    },
    {
      label: 'Snack',
      value: '',
      collection: 'snacks',
      helperText: 'Refreshments',
    },
    {
      label: 'Game',
      value: '',
      collection: 'games',
      helperText: 'What are you playing?',
    },
  ]);

  /**
   * I: Key which should be the id of a collection, the newValue we are setting
   */
  // Helper to set the values of inputValues in state
  const changeInputValue = (key, newValue) => {
    // Make a copy of the inputValues in state => Need to do this because of copy by reference
    const inputsCopy = [...inputValues];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < inputKeys.length; i += 1) {
      if (inputKeys[i] === key) {
        // Change the value of the corresponding inputValue state object
        // i + 1 cause 'name' is removed from inputKeys array
        inputsCopy[i + 1].value = newValue;
        setInputValues(inputsCopy);
        return;
      }
    }
  };

  // Handle changes in the input fields
  const handleChange = (element) => {
    // Make a copy of the inputValues in state => Need to do this because of copy by reference
    const inputsCopy = [...inputValues];
    // Access the id and value of the target element
    const { id, value } = element.target;
    // Check if were changing the name property in state
    if (id === 'name') {
      // Change the name value in state formValues to the current value in the input field
      formValues.name = value;
      // Change the value in the
      inputsCopy[0].value = value;
      setInputValues(inputsCopy);
      // setFormValues(formValues);
    } else {
      changeInputValue(id, value);
    }
  };
  // Handle the click of the + button
  const handleAddClick = (element) => {
    // Grab the id off the element
    const { id } = element.target;
    // Make a copy of formValues
    const formCopy = { ...formValues };
    // Use inputKeys (line 29) to match the collection we want to add to
    for (let i = 0; i < inputKeys.length; i += 1) {
      if (inputKeys[i] === id) {
        // Grab the value from inputvalues in state at i + 1
        const currValue = inputValues[i + 1].value;
        // Push onto formCopy at that id
        formCopy[id].push(currValue);
        // Change formValues in state to new formCopy
        setFormValues(formCopy);
        // Change the input value to an empty string
        changeInputValue(id, '');
        return;
      }
    }
  };
  // Handle the click of the form submit button
  const handleFinalClick = () => {
    const config = {
      formValues,
    };
    // Send axios POST request to the server
    axios
      .post('api/game-nights', config)
      .then(() => {
        setInputValues(initialInputs);
      })
      .then(closeForm)
      .then(getGameNights)
      .catch((err) => {
        console.error('Error POSTing new game night: ', err);
      });
  };

  const handleDateChange = (element) => {
    // Make a copy of formValues from state
    const formCopy = { ...formValues };
    // Grab the date and time off the element
    const { _d } = element;
    console.log('Full date: ', _d);
    // Format the date and time using moment
    // Pass in the date string with the curr format into moment() and the desired format in .format
    const date = moment(_d.toString().slice(0, 15), 'ddd MMM DD YYYY').format('dddd, MMMM Do YYYY');
    const time = moment(_d.toString().slice(16, 24), 'HH:mm:ss').format('h:mm');
    console.log('Date: ', date);
    console.log(typeof date);
    console.log('Time: ', time);
    console.log(typeof time);
    // Assign the new date to the copy of formValues
    formValues.date = date;
    // Set the new formValues in state
    // setFormValues(formCopy);
  };

  // Helper function to create divided list when adding to Game Night event
  const createDividedList = (collection) => (
    // Make sure the collection is not empty
    // Want to render a divided list with a ListItem for each element
    (
      <List sx={style}>
        {collection.map((element, index) => (
          // Some List Item Component
          <DividedListItem
            key={`${element}-${index * 2}`}
            element={element}
          />
        ))}
      </List>
    )
  );
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        {inputValues.map((input, index) => (
          <InputField
            key={`${input.label}`}
            objvalue={input}
            handleChange={handleChange}
            index={index}
            formValues={formValues}
            handleAddClick={handleAddClick}
            createDividedList={createDividedList}
          />
        ))}
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            onChange={handleDateChange}
            label="Select a Date"
          />
        </LocalizationProvider>
        <Button variant="contained" onClick={handleFinalClick} size="medium">
          LET&apos;S PLAY
        </Button>
        <Button
          variant="contained"
          fontSize="small"
          onClick={closeForm}
        >
          Cancel
        </Button>
      </FormControl>
    </Box>
  );
}

GameNightForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default GameNightForm;
