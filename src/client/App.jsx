import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import appTheme from './themes/App';
import CurrentGame from './views/CurrentGame';
import Home from './views/Home';
import Login from './views/Login';
import GameNights from './views/GameNights';

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="gamenights" element={<GameNights />} />
          <Route path="current-game" element={<CurrentGame />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
