import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import Navbar from '../components/Navbar';
import GameNightForm from '../components/CreateNight';
import GameNightsList from '../components/GameNightsList';

const {
  useState,
  useEffect,
} = React;

function GameNights() {
  // Set a state property to a boolean value to keep track if a new night is being made
  const [creatingNight, toggleCreatingNight] = useState(false);
  // Set state value to hold the existing game nights
  const [gameNights, setGameNights] = useState([]);

  // Get the gamenights from the database
  const getGameNights = () => {
    // Make axios GET request to /api/game-nights
    axios.get('/api/game-nights')
      .then(({ data }) => {
      // Set gameNights property in state to the returned gameNights array
        setGameNights(data);
      })
      .catch((err) => {
        // Handle any errors
        console.error('Error in axios get to /api/game-nights:', err);
      });
  };

  // When the components mounts, call our getGameNights function to set the state
  useEffect(() => {
    getGameNights();
  }, []);

  const handleClick = () => {
    toggleCreatingNight(!creatingNight);
  };

  return (
    <div>
      <Navbar />
      <GameNightsList
        gameNights={gameNights}
        getGameNights={getGameNights}
      />
      {!creatingNight && (
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Schedule Game Night
        </Button>
      )}
      {creatingNight
      && (
        <GameNightForm
          closeForm={handleClick}
          getGameNights={getGameNights}
        />
      )}
    </div>
  );
}

export default GameNights;
