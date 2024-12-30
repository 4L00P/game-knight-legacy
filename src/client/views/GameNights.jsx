import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import Navbar from '../components/Navbar';
import GameNightForm from '../components/CreateNight';

function GameNights() {
  const [creatingNight, toggleCreatingNight] = useState(false);

  const handleClick = () => {
    console.log('Toggling Creatingnight state');
    toggleCreatingNight(true);
  };
  return (
    <div>
      <Navbar />
      <ul>
        <li>Upcoming Game Night First</li>
        <li>Any past Game Nights After</li>
      </ul>
      {!creatingNight && (
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Schedule Game Night
        </Button>
      )}
      {creatingNight && <GameNightForm />}
    </div>
  );
}

export default GameNights;
