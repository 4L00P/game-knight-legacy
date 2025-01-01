import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Login() {
  // Set up the navigate function to navigate user to /home if already logged in
  const navigate = useNavigate();

  // Checks if the user is already logged in
  const verifyUserLoggedIn = () => {
    axios.get('/auth/user')
      /*
        Success, sends back 'data':
          - As an empty string (not logged in) or,
          - As an object (logged in)
      */
      .then(({ data }) => {
        if (data) {
          navigate('/home');
        }
      })
      // Failure, handle errors
      .catch((err) => {
        console.error('Failed to verifyUserLoggedIn:', err);
      });
  };

  // When component mounts, check if the user is already logged in
  useEffect(verifyUserLoggedIn, []);

  return (
    <div>
      <h1>Login Here</h1>
      <Button
        href="/auth"
      >
        Login with Google
      </Button>
    </div>
  );
}

export default Login;
