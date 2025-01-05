import React from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Button,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

// Icons:
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';

import Navbar from '../components/Navbar';
import GamesList from '../components/GamesList';

const {
  useState,
  useEffect,
} = React;

function Home() {
  // Tracks the state of the input field
  const [name, setName] = useState('');
  // Tracks the state of the games in the collection
  const [games, setGames] = useState([]);
  // Tracks whether there is an error in the input field
  const [inputNameError, setInputNameError] = useState(false);
  // Tracks whether these is a close match from a search
  const [closeMatch, setCloseMatch] = useState(null);
  /*
    Tracks the current filter for the games displayed:
      - Initially set to {} to grab all of a user's games
  */
  const [gamesFilter, setGamesFilter] = useState({});

  /*
    Sends a GET request for games using a query filter object:
      - gamesFilter => An object with these specifications:
        - key: Matches the name of the field on Games schema
        - value: Matches the type used for the field
          * Eg. Fields that use an array need to be an array containing
            the value you are looking for in the array
  */
  // Re-useable helper to make a request to the server for all games
  const getGames = () => {
    axios.get('/api/games', { params: { game: gamesFilter } })
      .then(({ data }) => {
        setGames(data);
      })
      .catch((err) => {
        console.error('Failed to getGames from DB:', err);
      });
  };

  // Handles setting inputNameError's state for only three seconds
  const handleSetInputNameError = () => {
    setInputNameError(true);
    setTimeout(() => {
      setInputNameError(false);
    }, 3000);
  };

  /*
    Sends POST request to add a game to the games collection:
      - You must pass the gameName into the function to avoid resetting
        state for suggested games
  */
  const postGame = (gameObj) => {
    axios.post('/api/games', { game: gameObj })
      .then(({ data }) => {
        /*
          If no data is in the response, setInputNameError to true using handleSetInputError:
          This warns user that they have spelt the name of the board game incorrectly
        */
        if (!data) {
          handleSetInputNameError();
        /*
          Otherwise, (1) setInputNameError to false to hide warning
          (2) fetchGames to render the newly added game
          (3) setName to '' to clear out the input field
        */
        } else {
          setInputNameError(false);
          getGames();
          setName('');
          // If data was a close match, set closeMatch equal to the data
          if (data.closeMatch) {
            setCloseMatch(data);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to postGame:', err);
      });
  };

  // Handles the yes choice for a close match
  const handleYesCloseMatchClick = () => {
    // Make a postGame request for the closeMatch
    postGame({ bggId: closeMatch.bggId });
    // Set closeMatch state back to null
    setCloseMatch(null);
  };

  // Handles the no choice for a close match
  const handleNoCloseMatchClick = () => {
    // Set closeMatch state to null
    setCloseMatch(null);
    /*
      Set inputNameError state to true to warn user to check spelling
      using handleSetInputNameError
    */
    handleSetInputNameError();
  };

  // When component mounts, make a get request for all games in the Games collection
  useEffect(() => {
    getGames();
  }, []);

  // When a gamesFilter is set, make a get request for all games matching the gamesFilter
  useEffect(() => {
    getGames();
  }, [gamesFilter]);

  /**
   * TextField notes:
   *  - error: Uses boolean inputNameError state value to determine if there is an error
   *  - helperText: Shows different message depending on inputNameError state
   *  - onChange: Sets the state of name when user types
   *  - onKeyUp: Submits POST /api/games request on 'Enter'
   */
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          pl: 2,
          pt: 2,
        }}
      >
        <Grid size={3}>
          <Typography variant="h6">
            Add a Board Game:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 12,
              pb: 0.75,
            }}
          >
            Searches Board Game Geeks for details.
          </Typography>
          <TextField
            error={inputNameError}
            label="Board Game Name"
            variant="outlined"
            value={name}
            helperText={inputNameError ? 'Check the spelling.' : 'Press \'Enter\' to add board game.'}
            onChange={(e) => { setName(e.target.value); }}
            onKeyUp={({ key }) => {
              if (key === 'Enter') {
                postGame({ name });
              }
            }}
          />
        </Grid>
        {
          closeMatch
            ? (
              <Grid
                size={9}
                sx={{
                  pl: 2,
                }}
              >
                <Typography variant="h6">
                  {`Did you mean ${closeMatch.name} - ${closeMatch.yearPublished}?`}
                </Typography>
                <IconButton
                  color="green"
                  onClick={handleYesCloseMatchClick}
                >
                  <ThumbUpTwoToneIcon />
                </IconButton>
                <IconButton
                  color="red"
                  onClick={handleNoCloseMatchClick}
                >
                  <ThumbDownTwoToneIcon />
                </IconButton>
              </Grid>
            )
            : null
        }
      </Grid>
      <Grid container spacing={2}>
        <Grid
          size={8}
          sx={{
            pl: 2,
            pt: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              pb: 1,
            }}
          >
            Board Games Collection:
          </Typography>
          <Container
            sx={{
              border: 1,
              borderColor: '#72BBE0',
              borderWidth: 5,
              borderRadius: 3,
              boxShadow: '0 0 15px 5px #48ABE0',
              backgroundColor: '#CDF5FF',
              pt: 1,
              pb: 1,
            }}
          >
            <GamesList
              games={games}
              getGames={getGames}
              setGamesFilter={setGamesFilter}
            />
          </Container>
        </Grid>
        <Grid
          size={4}
          sx={{
            padding: 2,
          }}
        >
          <Box
            sx={{
              pb: 2,
            }}
          >
            <Typography variant="h4">Collection Size:</Typography>
            <Typography variant="h1">{games.length}</Typography>
            {
              Object.keys(gamesFilter).length
                ? <Typography variant="subtitle2">*With Filter</Typography>
                : null
            }
          </Box>
          {
            Object.keys(gamesFilter).length
              ? (
                <Box>
                  <Typography variant="h5">
                    Filtering by:
                  </Typography>
                  <Typography variant="h6">
                    {`"${gamesFilter[Object.keys(gamesFilter)[0]][0]}"`}
                  </Typography>
                  <Button
                    onClick={() => { setGamesFilter({}); }}
                  >
                    REMOVE FILTER
                  </Button>
                </Box>
              )
              : null
            }
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
