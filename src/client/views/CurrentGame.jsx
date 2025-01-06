import React, { useState, useEffect } from "react";
import { Grid2,
   Typography,
    Paper,
    Button,
     Card,
      List,
       ListItem,
        Box,
       } from "@mui/material";
import PlayerList from '../components/PlayerList';
import axios from 'axios';
import PlayerCard from '../components/PlayerCard';

import Navbar from "../components/Navbar";
const Grid = Grid2;

function CurrentGame() {
  // set a useState function for night name, players, and game.
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [groups, setGroups] = useState([]);
  const [players, setPlayers] = useState([]);

  function getGroups() {
    axios
      .get("/api/groups")
      .then(({ data }) => {
        console.log(data);
        setGroups(data);
      })
      .catch((err) => {
        console.error("Could not Get groups", err);
      });
  }
   function moveGroupToPage(group) {
    setPlayers(group.players);
    setName(group.name);
   }
   function submitPlayer(e) {
    e.preventDefault();
    const newPlayer = e;
    console.log(newPlayer);
    players.push(newPlayer);
    console.log(players);
    setPlayers(players);
   }
  /**
   * Game Needs:
   * 1. Array of strings representing the names of each person playing(members);
   * 1a. set of members names in top-right corner that changes based on turn
   * (clickable, drag to change order)
   * 1b. set of members names more centered with forms that keep track of vp, hp, etc.
   * 2.opt. Dice assistant
   * 3. a timeout form and function that says when to alert a player that they're taking too long
   *  (maybe toggle the consequences. alert, move to next player);
   */
  // We can have the buttons from other pages get or href here,
  // then seed the data that was on the card they used to get here.
  // If info the card has matches the need, fill the form with it.
  //  if not, leave a form for them to add the info
  // Maybe make the forms themselves collapsable?
  // Game name populates top-ish
  // players populate the mid to bottom turn order area

  // Maybe I should make a helper function to navigate here from the other pages with an onclick

  // set the middle player indicators(with vp/hp) on a surface.
  // Have the elevation change from 1 to 24 depending on whether it is their turn
  // if it's their turn, crank the padding up to 16 or so, the elevation to 24,
  // and the padding color to something shimmery
  // when it's not their turn, padding back down to 0, elevation to 1

  // use set interval to change the game knight colors

  /**
   * Need a "PlayerCard" component with editable vp and hp spots(inc+dec arrows, too)
   * Turn order.
   * 1. Put list of players into an array. Give each player an additional attribute(isTurn)
   * 2. Have the array shift so the name in front goes to the back and everyone else moves up one
   */

  useEffect(getGroups, []);
  return (
    <div>
      <Typography variant="h2" align="center">
        Game Knight Active
      </Typography>
      <Navbar />
      <Typography variant="h2" align="center">
        {name}
      </Typography>
      <form align="center">
        <label htmlFor="name">
          Add Name
          <input type="text" id="name" />
        </label>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
      {/* <Typography variant="h4" align="center">
        Gaia Project
      </Typography>
      <form align="center">
        <label htmlFor="game">
          Add Game
          <input type="text" id="game" />
        </label>
        <Button variant="contained" type="submit">Submit</Button>
      </form> */}
      <form align="right">
        <label htmlFor="player">
          Add Player
          <input type="text" id="player" />
        </label>
        <Button onClick={submitPlayer} type="submit">Submit</Button>
      </form>
      <Box
      sx={{
        maxHeight: 200,
        position: 'relative',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '1em',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(23, 99, 154, 0.5)',
          webkitBoxShadow: 'inset 0 0 6px rgba(29, 137, 179, 0.5)',
          borderRadius: 10,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(10, 167, 195, 0.3)',
          outline: '3px rgba(33, 21, 251, 0.89)',
          borderRadius: 5,
        },
      }}
      >

      <List>
        {groups.map((group) => {
          const { players, name, isTurn } = group;
          return (
            <ListItem key={group._id} onClick={() => moveGroupToPage(group)}>
              <PlayerList players={players}
              group={group}
              name={name}
              />
            </ListItem>
          );
        })}
      </List>
        </Box>

      <Grid container spacing={2}>
        {/* This will be dynamical PlayerCard in the future. Remember VP, HP, Maybe MP */}
          {players.map((player) => {
            console.log(player);
            return (
              <PlayerCard
              key={player}
              player={player}
              isTurn={false}
              VP={0}
              HP={0}
              />
            );
          })}
      </Grid>
    </div>
  );
}

export default CurrentGame;
