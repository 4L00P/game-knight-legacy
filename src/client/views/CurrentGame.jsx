import React from "react";
import { useState } from "react";

import { Stack, Typography, Paper, ListItem } from "@mui/material";

import Navbar from "../components/Navbar";
// import { name, members } from '../../server/database/models/Groups';

function CurrentGame() {
  // set a useState function for night name, group, and game.
  const [ name, SetName ] = useState('');
  const [ game, SetGame ] = useState('');
  const [ group, SetGroup ] = useState('');
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
  // when you press start game, you get a filter with all gamenights set for today.
  // Picking one(even if there's only one), starts the get/post process.
  // set the middle player indicators(with vp/hp) on a Paper surface.
  // add square corners <paper square>person</paper> or square=`${true}`
  // make the papers vertical, not horizontal. and long, possibly
  // Have the elevation change from 1 to 24 depending on whether it is their turn
  // if it's their turn, crank the padding up to 16 or so, the elevation to 24,
  // and the padding color to something shimmery
  // when it's not their turn, padding back down to 0, elevation to 1

  // use set interval to change the game knight colors

  /**
   * useForm
   * Make the form first
   * install react-hooks-form
   * use in-born register (returns name, ref, onChange, onBlur) property.
   *  use spread operator {...register('idName')}
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
      <Typography variant="h4" align="center">Gaia Project</Typography>
      {/* SAVED FOR TURN ORDER MANIPULATION as a reminder
      <div className="turn-order-tags">
        <div>John</div>
        <div>Jacob</div>
        <div>Jingleheimer</div>
        <div>Schmidt</div>
      </div> */}
      <form>
        <label htmlFor="name">
          Name
          <input type="text" id="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form>
        <label htmlFor="player">
          Add Player
          <input type="text" id="player" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form>
        <label htmlFor="game">
          Game
          <input type="text" id="game" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="player-info-bars">
        <Paper elevation={0} style={{ height: '20px', width: '90px' }}>
          John info
        </Paper>
        <Paper elevation={8}>Jacob info</Paper>
        <Paper elevation={16}>Jingle info</Paper>
        <Paper elevation={24}>Schmidt info</Paper>
      </div>
    </div>
  );
}

export default CurrentGame;
