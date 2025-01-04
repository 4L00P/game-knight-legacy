import React from "react";
import { useState } from "react";
// import { Grid } from 'gridv2';
import { Grid2, Typography, Paper, Card } from "@mui/material";

import Navbar from "../components/Navbar";
// import { name, members } from '../../server/database/models/Groups';
const Grid = Grid2;

function CurrentGame() {
  // set a useState function for night name, players, and game.
  const [name, SetName] = useState('');
  const [game, SetGame] = useState('');
  const [players, Setplayers] = useState([]);
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

  return (
    <div>
      <Typography variant="h2" align="center">
        Game Knight Active
      </Typography>
      <Navbar />
      <Typography variant="h2" align="center">
        TEST GAME!!!
      </Typography>
      <form align="center">
        <label htmlFor="name">
          Add Name
          <input type="text" id="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Typography variant="h4" align="center">
        Gaia Project
      </Typography>
      <form align="center">
        <label htmlFor="game">
          Add Game
          <input type="text" id="game" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form align="right">
        <label htmlFor="player">
          Add Player
          <input type="text" id="player" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Grid container spacing={2}>
{/* This will be dynamical PlayerCard in the future. Remember VP, HP, Maybe MP */}
        <Grid size={4}>
          <Card elevation={24} style={{ height: "400px", width: "250px", boxShadow: "15px" }}>
            John info
          </Card>
        </Grid>

        <Grid size={4}>
            <Card elevation={24} style={{ height: "400px", width: "250px" }}>
              Janes verbose info
            </Card>
        </Grid>

        <Grid size={3}>
            <Card elevation={24} style={{ height: "400px", width: "250px" }}>
              Judos verbose info
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CurrentGame;
