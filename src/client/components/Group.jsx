import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Grid2, Button } from "@mui/material";
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
  function editingName() {}
  function editName() {}
  function editingPlayers() {}
  function editPlayers() {}
  return (
    <Grid item size={3}>
        <Card
        sx={{boxShadow: '0 0 15px 5px #48ABE0'}}
          elevation={10}
          style={{ height: "200px", width: "200px"}}
        >
          <Typography variant="h4">{name}</Typography>
          <Button type="button" onClick={editName}><Typography>Edit Name</Typography></Button>
          <Typography variant="h6">{players.join(',')}</Typography>
          <Button type="button" onClick={editPlayers}><Typography>Edit Players</Typography></Button>
          <Button type="button" onClick={deleteGroup}>
            <Typography>DELETE GROUP</Typography>
          </Button>
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
