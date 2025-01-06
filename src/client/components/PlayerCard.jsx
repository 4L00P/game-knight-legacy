import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Typography,
  Paper,
  List,
  ListItem,
  Grid2,
  Box,
} from "@mui/material";

const Grid = Grid2;
function PlayerCard({ player, isTurn, VP, HP }) {
  const [isFull, setIsFull] = useState(false);
  function turnToggle() {
    player.isTurn = !player.isTurn;
  }
  if (!isTurn) {
    return (
      <Box onClick={turnToggle}>
        <Grid size={3}>
          <Card
            elevation={10}
            style={{ height: "200px", width: "250px", padding: "35px" }}
          >
            <Typography variant="h3">{player}</Typography>
            <div>VP: <form><input></input></form></div>
      <div>HP: <form><label><input></input></label></form></div>
          </Card>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{ boxShadow: "0 0 15px 5px #48ABE0", backgroundColor: "#CDF5FF" }}
        onClick={turnToggle}
      >
        <Grid size={3}>
          <Card
            elevation={24}
            style={{ height: "200px", width: "250px", padding: "35px" }}
          >
            <Typography variant="h3">{player}</Typography>
            {/* <div>{VP}</div>
    <div>{HP}</div> */}
          </Card>
        </Grid>
      </Box>
    );
  }
}
PlayerCard.propTypes = {
  player: PropTypes.string.isRequired,
  isTurn: PropTypes.bool.isRequired,
  VP: PropTypes.number.isRequired,
  HP: PropTypes.number.isRequired,
};

// return a card with the player name, Vp and Hp keepers, and elevation based on isTurn

export default PlayerCard;
