import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Knight
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to="/groups"
            color="inherit"
          >
            Groups
          </Button>
          <Button
            component={Link}
            to="/gamenights"
            color="inherit"
          >
            Game Nights
          </Button>

          <Button
            component={Link}
            to="/friends"
            color="inherit"
          >
            Friends
          </Button>

          <Button
            component={Link}
            to="/current-game"
            color="inherit"
          >
            Active Game
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/home"
          >
            Collection
          </Button>
          <Button
            color="inherit"
            href="/logout"
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
