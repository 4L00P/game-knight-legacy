import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
    // create an object that holds the form values as value to a key called groups
    const groupObj = {
      groups: payload,
    };
    // send an axios post request that will post all the info we have and
    axios.post('api/groups', groupObj).then((group) => {
      // send a get request from a callback
      console.log(group);
      return getGroups;
    }).catch((err) => {
      console.error('Unable to Post group', err);
    });
  };
  
  return (
    <form onSubmit={submitGroup}>
      <label htmlFor="group-name-form" id="group-name-form">
        Group Name
        <input name="name" type="text" />
      </label>
      <label htmlFor="group-form-players" id="group-form-players">
        Player List
        <input name="players" type="text" />
      </label>
      <label htmlFor="group-form-game" id="group-form-game">
        Game List
        <input name="games" type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
GroupForm.PropTypes = {
  getGroups: PropTypes.func.isRequired,
};

export default GroupForm;
