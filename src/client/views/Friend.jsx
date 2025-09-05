import React from 'react';
import { useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
// The Paper component is a container for displaying content on an elevated surface
import Paper from '@mui/material/Paper';
// imported components
import Navbar from '../components/Navbar';
import FriendsList from '../components/group-friends-components/FriendsList';
import FriendsSearch from '../components/group-friends-components/FriendsSearch';

// Created a container for components being rendered.
const Container = styled(Paper)(({ theme }) => ({

  display: 'flex', // put the components side by side
  flexDirection: 'row', // change to 'column' if you want them stacked
  alignItems: 'center',
  // changes spacing around border of fields
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  // this changes the background color of the box container
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  width: 'fit-content',
  // changes where the outside border will be centered on the page
  // rem uses font size for spacing of elements on page
  margin: '2rem auto',
}));

// wrapped components in container so they are rendered in the same place.
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
