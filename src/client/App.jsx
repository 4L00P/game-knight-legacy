import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hello from './views/Home.jsx';
import Login from './views/Login.jsx';
import GameNights from './views/GameNights.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Hello />}>
          <Route path="gamenights" element={<GameNights />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
