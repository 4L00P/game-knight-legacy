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
  label: 'Name', value: '', helperText: 'Name your event',
},
{
  label: 'Guest', value: '', helperText: 'Add a guest',
},
{
  label: 'Snack', value: '', helperText: 'Refreshments',
},
{
  label: 'Game', value: '', helperText: 'What are you playing?',
},
];

function GameNightForm() {
  // Initialize the state of the component
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [games, setGames] = useState([]);

  // Handle change in the name input field
  const handleNameChange = (element) => {
    const { value } = element.target;
    console.log(value);
    setName(value);
  };
  // Handle changes in the input fields
  const handleChange = (element, index) => {
    console.log(element.target.value);
  };

  const handleClick = () => {
    const config = {
      gameNight: {
        name,
        date,
        guests,
        snacks,
        games,
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
        {initialInputs.map((input, index) => (
          <InputField
            key={`${input.label}-${index * Math.random()}`}
            objvalue={input}
            onChange={handleChange}
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
