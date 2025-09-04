import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import appTheme from './themes/App';
import CurrentGame from './views/CurrentGame';
import Home from './views/Home';
import Login from './views/Login';
import GameNights from './views/GameNights';
import Groups from './views/Groups';
import Friend from './views/Friend';

import Chat from './components/group-chat-components/Chat';

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="gamenights" element={<GameNights />} />
          <Route path="groups" element={<Groups />} />
          <Route path="current-game" element={<CurrentGame />} />
          <Route path="friends" element={<Friend />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
