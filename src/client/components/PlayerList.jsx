import React, { useState } from "react";
import { List, Paper } from '@mui/material';

const PlayerList = ({ name, players }) => {
 
  return (
    <Paper style={{maxHeight: 200, overflow: 'auto'}}>
  <List>
    <Paper elevation={10}
     style={{width: "100px"}
     }>
      {name}
     </Paper>
    </List>
    </Paper>
    );

};

export default PlayerList;
