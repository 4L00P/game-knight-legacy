import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';

const {
  useState,
  useEffect,
} = React;

function Home() {
  const [name, setName] = useState('');
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get('/api/games')
      .then(({ data }) => {
        setGames(data);
      })
      .catch((err) => {
        console.error('Failed to fetch games from DB:', err);
      });
  }, []);
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
