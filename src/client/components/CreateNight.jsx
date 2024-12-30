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
  const [guests, setGuests] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [games, setGames] = useState([]);

  // Helper function to map over collection and return  InputField
  const mapCollection(stateValue)
  // Function that handles the change of the form input fields
  /**
   * I: element and index
   */
  const handleChange = (element, index) => {
    const values = [...snacks];
    console.log('Values: ', values, index);
    values[index].value = element.target.value;
    setFormValues(values);
  };
  console.log('Form Values:', formValues);
  return (
    <FormControl>
      {formValues.map((obj, index) => (
        <InputField
          key={`${obj.label + index}`}
          objvalue={obj}
          onChange={(element) => { handleChange(element, index); }}
        />
      ))}
    </FormControl>
  );
}

export default GameNightForm;
