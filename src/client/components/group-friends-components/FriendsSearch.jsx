import React from 'react';
import axios from 'axios';
import { useState } from 'react';

// imported AppBar from mui and edited to only render the search bar.
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Friend from './Friend';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function PrimarySearchAppBar() {
  // setup state
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // handles inputs from the text input
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSearch = () => {
    // update state with new message
    axios.get(`/api/users/:${search}`)
      .then((data) => {
        console.log(data)
        const { user } = data;
        setSearchResults(user);
        // clears the search bar
        setSearch('');
      })
      .catch((err) => {
        console.error('failed to perform search CLIENT', err);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              // onChange={handleChange}
              // onKeyUp={({ key }) => {
              //   if (key === 'Enter') {
              //     handleSearch();
              //   }
              // }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {/* {searchResults.map((friend) => <Friend friend={friend} />)} */}

    </Box>
  );
}
// map over search to pass one search result or friend into friend
