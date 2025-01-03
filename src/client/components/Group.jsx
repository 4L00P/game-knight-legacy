import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Grid2 } from '@mui/material';

function Group({
  name,
  players,
  games,
}) {
  return (
    <Card elevation={10} style={{ height: "120px", width: "120px", padding: "14px" }}>
      <div>{name}</div>
      <div>{players}</div>
      <div>{games}</div>
    </Card>
  );
}

Group.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  games: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Group;
