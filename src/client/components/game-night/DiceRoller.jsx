import React from 'react';
import { useState } from 'react';

import {
  Paper,
  Fab,
  Chip,
  Stack,
} from '@mui/material';

function DiceRollerComponent() {
  // states for dice buttons
  const [currentDice, setCurrentDice] = useState(['d10', 'd10', 'd4']);

  // handlers
  const handleDiceSelect = () => {

    // update current dice state

  };

  // delete chip that has dice
  const handleDelete = (e) => {
    const { innerText } = e.target;
    let removed = false;
    // setCurrentDice and use filter with current dice, filtering OUT the delete dice
    setCurrentDice(currentDice.filter((die) => {
      // if the die is not the die being removed OR the die has already been removed
      if (die !== innerText || removed === true) {
        // return die
        return true;
      }
      removed = true;
      return false;
    }));
  };

  // rendering html
  return (
    <Paper elevation={6}>
      <Fab color="primary" onClick={handleDiceSelect}>
        D4
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D6
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D8
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D10
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D%
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D12
      </Fab>
      <Fab color="primary" onClick={handleDiceSelect}>
        D20
      </Fab>
      <br />
      <Stack direction="row" spacing={1}>
        { currentDice.map((die) => <Chip label={die} value={die} onClick={handleDelete} />)}
      </Stack>
    </Paper>
  );
}

export default DiceRollerComponent;
