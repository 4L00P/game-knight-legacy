import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
} from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Knight
        </Typography>
        <Stack direction="row" spacing={2}>
        <Button color="inherit">Home</Button>
          <Button color="inherit">Game Nights</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
