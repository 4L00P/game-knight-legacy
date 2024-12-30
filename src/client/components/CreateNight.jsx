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

function GameNightForm() {
  // Initialize the state of the component
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState([{ label: 'Guest', value: '', helperText: 'Who\'s invited?' }]);
  const [snacks, setSnacks] = useState([{
    label: 'Snack', type: 'text', value: '', helperText: 'What\'s on the menu?',
  }]);
  const [games, setGames] = useState([{ label: 'Game', value: '', helperText: 'What are we playing?' }]);

  // Function that handles the change of the form input fields
  /**
   * I: element and index
   */
  const handleChange = (element, index) => {
    // Grab the values from  from state
    const newSnacks = [...snacks];
    // Set the element value in state to the new value from the element target
    snacks[index].value = element.target.value;
    setSnacks(newSnacks);
  };
  // Helper function to map over collection and return  InputField
  const mapCollection = (stateValue) => {
    console.log('Mapping: ', stateValue);
    return stateValue.map((obj, index) => (
      <InputField
        key={`${obj.value + index}`}
        index={index}
        objvalue={obj}
        onChange={handleChange}
      />
    ));
  };

  const handleClick = () => {
    // Send axios POST request to the server
    axios.post('api/game-nights')
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
        <TextField
          type="text"
          label="Name"
          id="name"
          variant="outlined"
          helperText="Name your event"
          onChange={handleChange}
        />
        {mapCollection(guests)}
        {mapCollection(snacks)}
        {mapCollection(games)}
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
