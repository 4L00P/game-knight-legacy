import React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';
import FriendsList from '../components/group-friends-components/FriendsList';
import FriendsSearch from '../components/group-friends-components/FriendsSearch';

const Container = styled(Paper)(({ theme }) => ({
  display: 'flex', // put them side by side
  flexDirection: 'row', // change to 'column' if you want them stacked
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  width: 'fit-content',
  margin: '2rem auto',
}));

export default function Friends() {
  return (
    <div>
      <Navbar />
      <Container elevation={3}>
        <FriendsList />
        <FriendsSearch />

      </Container>
    </div>
  );
}
