import React from 'react';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import FriendsList from '../components/group-friends-components/FriendsList';
import FriendsSearch from '../components/group-friends-components/FriendsSearch';

export default function Friends() {
  return (
    <div>
      <Navbar />
      <FriendsList />
      <FriendsSearch />

    </div>
  );
}
