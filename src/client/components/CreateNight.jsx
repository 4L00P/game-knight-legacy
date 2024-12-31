import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Box,
  Button,
} from '@mui/material';
import InputField from './InputField';

const { useState } = React;

const initialInputs = [
  {
    label: 'Name',
    value: '',
    collection: 'name',
    helperText: 'Name your even',
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

function GameNightForm({ closeForm }) {
  // Initialize the state of the component
  const [formValues, setFormValues] = useState({
    name: '',
    guests: [],
    snacks: [],
    games: [],
  });
  // State object to hold the input objects from initialInputs above (line 14)
  const [inputValues, setInputValues] = useState(initialInputs);

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
      .then(closeForm)
      .catch((err) => {
        console.error('Error POSTing new game night: ', err);
      });
  };
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
            handleAddClick={handleAddClick}
          />
        ))}
        <Button variant="contained" onClick={handleFinalClick}>
          LET&apos;S PLAY
        </Button>
      </FormControl>
    </Box>
  );
}

GameNightForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default GameNightForm;
