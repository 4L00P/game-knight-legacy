import React from 'react';
import Navbar from '../components/Navbar';

const { useState } = React;

function Home() {
  const [name, setName] = useState('');
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <input
        value={name}
        onChange={(e) => { setName(e.target.value); }}
      />
    </div>
  );
}

export default Home;
