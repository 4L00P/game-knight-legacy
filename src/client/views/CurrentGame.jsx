import React from 'react';
import { useState } from 'react';

import {
  Stack,
  Typography,
  Paper,
  ListItem
} from '@mui/material';

import Navbar from '../components/Navbar';
// import { name, members } from '../../server/database/models/Groups';

function CurrentGame() {
  // tie members to state so we can change based on cancellations and removals. give a different name
  // [ players, SetPlayers ] = useState([]);
  // [ isTurn, SetIsTurn ] = useState(false);
  // tie a variable to state that signifies whether it is that player's turn
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


  return (
    <div>
      <h1>Game Knight Active</h1>
      <Navbar />
      <h1>TEST GAME!!!</h1>
      <div className="turn-order-tags">
        <div>John</div>
        <div>Jacob</div>
        <div>Jingleheimer</div>
        <div>Schmidt</div>
      </div>
       <div className="player-info-bars">
        <Paper elevation={0}
        // sx={
        //   padding: 2,
        //   border: "1px solid black",
        //   margin: 8
        // }
        >John info</Paper>
        <Paper elevation={8}>Jacob info</Paper>
        <Paper elevation={16}>Jingle info</Paper>
        <Paper elevation={24}>Schmidt info</Paper>

      </div> 

    </div>
  );
}

export default CurrentGame;
