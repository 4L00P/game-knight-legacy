import React from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  // Create navigate function to change the view after logout
  const navigate = useNavigate();
  // Handles logging out of the current session for the user
  const handleLogout = () => {
    axios.get('/logout')
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error('Failed to logout:', err);
      });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Knight
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            component={Link}
            to="/home"
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/gamenights"
            color="inherit"
          >
            Game Nights
          </Button>
          <Button
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
