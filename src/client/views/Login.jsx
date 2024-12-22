import React from 'react';
import axios from 'axios';

function Login() {
  const googleLogin = () => {
    axios.get('/auth/login/google')
      .then(() => {
        console.log('Logged in');
      })
      .catch((err) => {
        console.error('Failed to log in with Google:', err);
      });
  };
  return (
    <div>
      <h1>Login Here</h1>
      <button
        type="button"
        onClick={googleLogin}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
