import React, { useState, useEffect } from "react";
import {
  Grid2,
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

import DiceRollerComponent from "../components/game-night/DiceRoller";

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
    const newPlayer = e.target.value;
    players.push(newPlayer);
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
      <DiceRollerComponent />
    </div>
  );
}

export default CurrentGame;
