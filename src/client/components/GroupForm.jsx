import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
function GroupForm(props) {
  const { getGroups } = props;
  // useEffect(() => getGroups, []);
  
  const submitGroup = (e) => {
    // to prevent the page from sending a get request
    e.preventDefault();
    // use FormData to construct sets of k/v pairs representing our form fields
    // and what is currently inside them(e.target)
    const formData = new FormData(e.target);
    // set a variable to represent the FromEntries method
    // that pulls and contains the values from FormData
    const payload = Object.fromEntries(formData);
    
    payload.players = payload.players.split(',').map((name) => name.trim());
    // create an object that holds the form values as value to a key called groups
    const groupObj = {
      groups: payload,
    };
    // send an axios post request that will post all the info we have and
    axios.post('api/groups', groupObj).then((group) => {
      // send a get request from a callback
      console.log(group);
      getGroups();
    }).catch((err) => {
      console.error('Unable to Post group', err);
    });
  };
  return (
    <form onSubmit={submitGroup}>
      <label htmlFor="group-name-form" id="group-name-form">
        <Typography variant="h6">Name</Typography>
        <input name="name" type="text" />
      </label>
      <label htmlFor="group-form-players" id="group-form-players">
        <Typography variant="h6">Players</Typography>
        <input name="players" type="text" />
      </label>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}
GroupForm.PropTypes = {
  getGroups: PropTypes.func.isRequired,
};

export default GroupForm;
