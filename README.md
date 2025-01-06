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

Node Version Requirement: 20

We make use of the Mongoose ODM to interact with a MongoDB database located in the same place as the server. Be sure that you are running your MongoDB database while in development.

All other dependencies are included in the package.json can be installed with the following script in the terminal:
`npm install`

Technologies used in this repository:
- Front-End Framework: React & React Router
- Styling Framework: Material UI
- Server: Built using Express
- Database: MongoDB
- Authentication: Google
- Additional Technologies:
  - Axios, for server requests
  - Moment, for displaying dates and times

### Scripts available in the package.json:

`start` : Starts your server with nodemon for development.

`build` : Starts the webpack script to transpile your files; watches for changes for development.

`dev:update` : Reinstalls dependencies if you are working on the project's dependencies.

**The following scripts are used for a production build after initially installing dependencies:**

`prod:update` : Reinstalls dependencies for production if you are worked on the project's dependencies in development.

`prod:build` : Runs the webpack script once to prepare the files to server to the user.

`prod:start` : Starts the server with node for production.

## Google OAuth Steps
Game Knight authenticates user login using passport.js with the Google OAuth 2.0 Strategy. This means you'll need to create credentials with Google [here](https://console.cloud.google.com/apis/credentials). When you create credentials for an OAuth client ID, select "Web application" for your application type, use the URI "http://localhost:8000" for your authorized JavaScript origin to develop locally, and use the URI "http://localhost:8000/auth/callback" for your authorized redirect URI for Google's Authentication send a response back to your server.
Add similar URIs for your production build.

Once you have your OAuth 2.0 Client ID, locate you Client ID and Client secret because you'll need them in you .env file.

In this repo, you'll find a file called .env-example. Be sure to copy this file as .env. In the newly created .env, you'll enter the following:
- `GOOGLE_CLIENT_ID` : The client ID from your Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` : The client secret from your Google OAuth Client ID
- `SESSION_SECRET` : A hard to guess secret string for your Express sessions.
- `DOMAIN_NAME` : The domain name of your server. If your using a local development environment, I suggest putting 127.0.0.1.
- `PORT` : The port defaults to 8000 if this isn't here, but if you'd like to use a different port, you can put it here.

## Architecture Diagrams

### Client-side Component Tree
We are making use of React-Router. The routes are defined in `./src/client/App.jsx`. Each route is assigned a "view", which we have stored in the `./src/client/views/` directory. Each view makes use of different components found in the `./src/client/components/` directory, which may contain further nested directories for the organization of components.

The following is a break down of each view:

`Login` : This view is the landing page for Game Knight. Users will login here.

`Home` : This view shows the user their board game collection. This view uses the following components (indentation denotes children):
- NavBar
- GamesList
  - Game
    - GameInfo
      - GameGeneralInfo
      - GameCatsAndMechsInfo
      - GameRatingAndNotesInfo
      - GameDescriptionInfo
    - RemoveGameDialog

`GameNights` : This views shows the user game nights they've planned. This view uses the following components (indentation denotes children):
- NavBar
- GameNightsList
  - Night
    - NightDetails
      - DateEdit
      - EventItem
- GameNightForm
  - DividedListItem
  - InputField
    - CalendarField

`Groups` : This view shows the user groups they've created. This view uses the following components (indentation denotes children):

- NavBar
- GroupForm
- Group

`CurrentGame` : This view allows the user to select a group to use helpful features to facilitate game play. This view uses the following components (indentation denotes children):

- NavBar
- PlayerList
- PlayerCard

### Server Routes
All endpoints can be found in the initial express app found at `./src/server/app.js` and different routers found in the `./src/server/routes/` directory. The Express server uses the following endpoints:

- `/auth` : This route holds all authentication endpoints to facilitate the Google login process
  - `/auth/user` : This endpoint sends back user info from the current session.
- `/api/games` : This route holds all interactions with the Games collection.
  - POST `/`
    - Creates a board game object for a user in the database
    - Must send an object in the request body:
      - `{ game: { name || bggId } }`
        - Must have either a "name" key or a "bggId" key.
          - "name" : The Title of a board game
          - "bggId" : The Board Game Geeks id of a board game
  - GET `/`
    - Sends back the user's games
    - Optionally, you may send query parameters to filter the query for games in the params key using axios:
      - `{ game: { field(s) } }`
        - The key(s) should match the field in the Games collection to set a filter
  - DELETE `/:id`
    - Removes the game from the database using the _id from the game object.
  - PATCH `/:id`
    - Updates the game from the database using the _id from the game object.
    - Must send an object in the request body:
      - `{ game: { fields } }`
        - The key(s) should match the field in the Games collection to update the fields for the game object using the values attached to the keys.
- `/api/game-nights` : This route holds all interactions with the GameNights collection.
  - GET `/`
  - POST `/`
- `/api/groups` : This route holds all interactions with the Groups collection.
  - POST `/`
  - GET `/`
  - PATCH `/:id`
- `/logout` : This endpoint logs the user out of their current session and clears their cookie.
- `*` : This endpoint facilitates all React-Router requests to the server. Using a custom verifySession middleware to check that a user has signed in properly to be able to navigate the site.

### Database Schemas
We are using MongoDB with the Mongoose ODM. You can find schemas in the `./src/server/database/models` directory. At this moment, we have the following collections:
- Users
- Games
- GameNights
- Groups

## Future
> ... any ideas we like from our backlog we can leave here ...