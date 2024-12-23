import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Custom link behavior using react router's Link component
const LinkBehavior = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/" {...props} role={undefined} />
));
function Navbar() {
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
            onClick={() => { console.log('Click'); }}
          >
            Game Nights
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
