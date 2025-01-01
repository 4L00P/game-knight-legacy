import React from 'react';
import { Button } from '@mui/material';

function Login() {
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
