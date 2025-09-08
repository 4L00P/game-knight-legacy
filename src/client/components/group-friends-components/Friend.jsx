import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Friend(props) {
  // --------------[PROPS]---------------
  const { friend } = props;
  // console.log(friend);

  const handleAddFriend = () => {
    axios.get('/auth/user')
      .then((res) => {
        const { email } = res.data;
        // console.log(res.data)
        console.log(email, friend.email)
        // axios.get(`/api/pending/:${email}:${friend.email}`);
      })
      .catch((err) => {
        console.error('failed to perform search CLIENT', err);
      });
  };
  // --------------[RENDER]---------------
  return (
    <Container elevation={3}>
      {friend.name}
      <Button onClick={handleAddFriend}>
        Add Friend
      </Button>

    </Container>
  );
}
