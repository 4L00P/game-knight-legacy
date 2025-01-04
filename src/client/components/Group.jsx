import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Grid2 } from "@mui/material";
import axios from "axios";

const Grid = Grid2;
function Group({ id, name, players, getGroups }) {
  function deleteGroup() {
    // run axios delete with the _id from the key prop
    axios
      .delete(`/api/groups/${id}`)
      .then(() => {
        getGroups();
      })
      .catch((err) => {
        console.error("Unable to Delete group", err);
      });
  }
  return (
    <Grid item size={3}>
        <Card
          elevation={10}
          style={{ height: "200px", width: "200px", padding: "14px" }}
        >
          <Typography>{name}</Typography>
          <button type="button">Edit Name</button>
          <Typography>{players.join(',')}</Typography>
          <button type="button">Edit Players</button>
          <button type="button" onClick={deleteGroup}>
            DELETE GROUP
          </button>
        </Card>
    </Grid>
  );
}
Group.propTypes = {
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired, 
  getGroups: PropTypes.func.isRequired,
};
export default Group;
