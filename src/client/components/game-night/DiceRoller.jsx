import React from 'react';
import { useState } from 'react';

import {
  Paper,
  Fab,
  Chip,
  Stack,
} from '@mui/material';

function DiceRollerComponent() {
  // --------------[STATES]---------------

  const [currentDice, setCurrentDice] = useState([]);

  // -------------[HANDLERS]--------------

  // adds die clicked to currentDice state
  const handleDiceClick = (e) => {
    const { innerText } = e.target;
    // update current dice state
    setCurrentDice([...currentDice, innerText.toLowerCase()]);
  };

  // deletes a die when chip is clicked
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

  // --------------[HELPERS]--------------

  // rendering html
  return (
    <Paper elevation={6}>
      <Fab color="primary" onClick={handleDiceClick}>
        d4
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d6
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d8
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d10
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d%
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d12
      </Fab>
      <Fab color="primary" onClick={handleDiceClick}>
        d20
      </Fab>
      <br />
      <Stack direction="row" spacing={1}>
        <Chip label="Click to remove:" />
        { currentDice.map((die) => <Chip label={die} value={die} onClick={handleDelete} />)}
      </Stack>
    </Paper>
  );
}

export default DiceRollerComponent;
