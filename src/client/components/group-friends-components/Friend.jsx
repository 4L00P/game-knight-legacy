import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Friend(props) {
  // --------------[PROPS]---------------
  // represents user to be added
  const { friend } = props;
  // console.log(friend);
  // should render a single users result
  const handleAddFriend = () => {
    // GET request to '/auth/user' to get the user that is already logged
    axios.get('/auth/user')
      .then((res) => {
        const currentUserEmail = res.data.email;
        // send POST to '/api/users/addFriend' endpoint
        axios.post('/api/users/addFriend', {
          // logged in user
          userEmail: currentUserEmail,
          // user prop
          friendEmail: friend.email,
        })
          .then(() => {
            console.log('Friend added!');
          })
          .catch((err) => {
            console.error('Failed to add friend', err);
          });
      })
      .catch((err) => {
        console.error('Failed to get current user', err);
      });
  };
  // --------------[RENDER]---------------
  // clicking the button triggers handleAddFriend
  // renders friend name and add friend button
  return (
    <Container elevation={3}>
      {friend.name}
      <Button onClick={handleAddFriend}>
        Add Friend
      </Button>

    </Container>
  );
}
