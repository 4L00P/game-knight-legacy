import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Card, Typography, Paper, List, ListItem, Grid2 } from '@mui/material';

const Grid = Grid2;
function PlayerCard({ player, isTurn, VP, HP }) {
  const [isFull, setIsFull] = useState(false);
  return (
    <Grid size={3}>
    <Card
      elevation={24}
      style={{ height: "200px", width: "250px", padding: "35px" }}
      >
      <Typography>{player}</Typography>
      <div>{VP}</div>
      <div>{HP}</div>
    </Card>
      </Grid>
  );

}
PlayerCard.propTypes = {
  player: PropTypes.string.isRequired,
  isTurn: PropTypes.bool.isRequired,
  VP: PropTypes.number.isRequired,
  HP: PropTypes.number.isRequired,
};

// return a card with the player name, Vp and Hp keepers, and elevation based on isTurn

export default PlayerCard;
