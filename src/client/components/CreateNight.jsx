import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Box,
  Button,
} from '@mui/material';
import InputField from './InputField';

const initialInputs = [{
  label: 'Name', value: '', collection: 'name', helperText: 'Name your event',
},
{
  label: 'Guest', value: '', collection: 'guests', helperText: 'Add a guest',
},
{
  label: 'Snack', value: '', collection: 'snacks', helperText: 'Refreshments',
},
{
  label: 'Game', value: '', collection: 'games', helperText: 'What are you playing?',
},
];

function GameNightForm() {
  // Initialize the state of the component
  const [formValues, setFormValues] = useState({
    name: '',
    guests: [],
    snacks: [],
    games: [],
  });

  const [inputValues, setInputValues] = useState(initialInputs);
  // Handle changes in the input fields
  const handleChange = (element) => {
    // Make a copy of the state values => Need to do this because of copy by reference
    const inputsCopy = inputValues.slice();
    // Access the id and value of the target element
    const { id, value } = element.target;
    console.log('Id and value: ', id, value);
    // Check if were changing the name property in state
    if (id === 'name') {
      // Change the name value in state formValues to the current value in the input field
      formValues.name = value;
      // Change the value in the
      inputsCopy[0].value = value;
      setInputValues(inputsCopy);
      // setFormValues(formValues);
    } else {
      console.log('Not for the name');
    }
  };

  const handleClick = () => {
    const config = {
      gameNight: {

      },
    };
    // Send axios POST request to the server
    axios.post('api/game-nights', config)
      .then((gameNight) => {
        console.log('Game night added: ', gameNight);
      }).catch((err) => {
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
            key={`${input.label}-${index * Math.random()}`}
            objvalue={input}
            onChange={handleChange}
            onBlur={() => { console.log('left the input field'); }}
          />
        ))}
        <Button
          variant="contained"
          onClick={handleClick}
        >
          LET&apos;S PLAY
        </Button>
      </FormControl>
    </Box>
  );
}

export default GameNightForm;
