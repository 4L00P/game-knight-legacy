import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
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

  return (
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
    </FormControl>
  );
}

export default GameNightForm;
