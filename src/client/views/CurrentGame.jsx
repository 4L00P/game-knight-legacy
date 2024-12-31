import React from 'react';
import { Stack,
  Typography,
  Paper,
  ListItem
} from '@mui/material';
// import{ Grid } from '@mui/material/grid2';
import Navbar from '../components/Navbar';
import { name, members } from '../../server/database/models/Groups';

const { useState, useEffect } = React;

function CurrentGame() {
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
  // tie members to state so we can change based on cancellations and removals
  [ members, SetMembers ] = useState;
  // tie a variable to state that signifies whether it is that player's turn
  [ isTurn, SetIsTurn ] = useState;
  // when you press start game, you get a filter with all gamenights set for today.
  // Picking one(even if there's only one), starts the get/post process.
  // set the middle player indicators(with vp/hp) on a Paper surface.
  // Have the elevation change from 1 to 24 depending on whether it is their turn
  // add square corners <paper square>person</paper> or square=`${true}`

  return (
    <div>
      <h1>Game Knight Active</h1>
      <Navbar />
      <h1>TEST GAME!!!</h1>
      <div className="turn-order-tags">
        <span>John</span>
        <span>Jacob</span>
        <span>Jingleheimer</span>
        <span>Schmidt</span>
      </div>
      <div className="player-info-bars">
        <Paper elevation={0}>John info</Paper>
        <Paper elevation={8}>Jacob info</Paper>
        <Paper elevation={16}>Jingle info</Paper>
        <Paper elevation={24}>Schmidt  info</Paper>

      </div>

    </div>
  );
}

export default CurrentGame;
