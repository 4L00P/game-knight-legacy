# Game Knight: The Board Game Companion

## Introduction
Welcome to Game Knight! We want to develop a companion application for board game enjoyers out there. We are striving to create a central hub for keeping track of a board game collection, scheduling game nights, and assisting players while they play board games.

## Current Features
> Search Board Game Geeks for board game info and store the info in your collection.



> Update the info on your board games with a rating and notes, and remove games if you don't want them in your collection anymore.



> Filter your game collection based off a category or mechanic from a board game in your collection.



> Schedule game nights with a predetermined list of guests, snacks, and games.



> View a scheduled game night from another user using a code.



> Edit your scheduled game nights by adding or removing guests, snacks, or games from the event, cancel a game night, or remove it entirely from your profile.



> Create groups of players for different game sessions.



> Edit your groups in case someone can't play or if you have an additional player, and then remove the group once you're done with it.



> A group has the additional feature of keeping track of turn order while you play a board game.



## Developer Notes
Here's what you need to know to begin development on Game Knight:

Node Version: 20

We make use of the Mongoose ODM to interact with a MongoDB database located in the same place as the server. Be sure that you are running your MongoDB database while in development.

All other dependencies are included in the package.json can be installed with the following script in the terminal:
`npm install`

### Scripts available in the package.json:

`start` :

`build` :

`dev:update` :

The following scripts are used for a production build after initially installing dependencies:

`prod:update` :

`prod:build` :

`prod:start` :

## Google OAuth Steps
Game Knight authenticates user login using passport.js with the Google OAuth 2.0 Strategy. This means you'll need to create credentials with Google [here](https://console.cloud.google.com/apis/credentials). When you create credentials for an OAuth client ID, select "Web application" for your application type, use the URI "http://localhost:8000" for your authorized JavaScript origin to develop locally, and use the URI "http://localhost:8000/auth/callback" for your authorized redirect URI for Google's Authentication send a response back to your server.
Add similar URIs for your production build.

## Architecture Diagrams


## Future