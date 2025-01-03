import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Card, Typography, Grid2 } from '@mui/material';

function Group({ key, name, players, games }) {
  return (
    <li>{name}</li>
  ); 

}

Group.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  games: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Group;
