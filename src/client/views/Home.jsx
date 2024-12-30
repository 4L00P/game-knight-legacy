import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import GamesList from '../components/GamesList';

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
    <>
      <Navbar />
      <h1>Hello World</h1>
      <input
        value={name}
        onChange={(e) => { setName(e.target.value); }}
      />
      <GamesList games={games} />
    </>
  );
}

export default Home;
