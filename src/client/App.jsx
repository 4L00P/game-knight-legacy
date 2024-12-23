import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hello from './components/Hello.jsx';
import Login from './views/Login.jsx';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
