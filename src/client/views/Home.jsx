import React from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';

import Navbar from '../components/Navbar';
import GamesList from '../components/GamesList';

const {
  useState,
  useEffect,
} = React;

function Home() {
  const [name, setName] = useState('');
  const [games, setGames] = useState([]);
  const [inputNameError, setInputNameError] = useState(false);

  // Re-useable helper to make a request to the server for all games
  const fetchGames = () => {
    axios.get('/api/games')
      .then(({ data }) => {
        setGames(data);
      })
      .catch((err) => {
        console.error('Failed to fetch games from DB:', err);
      });
  };

  // Sends POST request to add a game to the games collection
  const postGame = () => {
    axios.post('/api/games', { game: { name } })
      .then(({ data }) => {
        if (!data) {
          setInputNameError(true);
        } else {
          setInputNameError(false);
          fetchGames();
          setName('');
        }
      })
      .catch((err) => {
        console.error('Failed to postGame:', err);
      });
  };

  // When component mounts, make a get request for all games in the Games collection
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Typography variant="h6" style={{ paddingBottom: 10 }}>
          Add a Game to your collection:
        </Typography>
        <TextField
          error={inputNameError}
          label="Board Game Name"
          variant="outlined"
          value={name}
          helperText={inputNameError ? 'Check the spelling.' : ''}
          onChange={(e) => { setName(e.target.value); }}
          onKeyUp={({ key }) => {
            if (key === 'Enter') {
              postGame();
            }
          }}
        />
      </Box>
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Typography variant="h4">
          Board Games Collection:
        </Typography>
        <GamesList games={games} />
      </Box>
    </>
  );
}

export default Home;
