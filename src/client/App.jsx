import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hello from './components/Hello.jsx';
import Login from './views/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
