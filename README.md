# Game Knight: The Board Game Companion

## Introduction
Welcome to Game Knight! Getting a group together for a game night can be tough: What should we play? What games are available? Forgetting whose turn it is. Game Knight will be a central hub for keeping track of a board game collection, scheduling game nights, and assisting players while they play board games.

## Current Features
> Search for a board game and store the game along with its information in your collection.

- The search utilizes the Board Game Geeks API to gather important details about a board game.

> Track how you feel about a board game in your collection with a rating or a note.

> Filter your game collection based off a category or mechanic to find a game that's perfect for your game night.

> Schedule game nights with a predetermined list of guests, snacks, and games.
- Edit the details of the game night if plans change:
  - Remove guests
  - Remove snacks
  - Remove games
  - Rename title
  - Pick a new date or time
- Declare a winner after the game night has passed to keep a record.

> Create groups of players for different game sessions.



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

## Deployment Steps ##
Deploy with `AWS` and `PuTTY` (Windows) - Using an `EC2`
The only thing that'll change with using Mac/ Linux is using Open SSH instead of PuTTTY

# AWS #
1) Make an account to use AWS
2) From the homepage, search `EC2` and hit `Launch an instance`
3) For the Amazon Machine Image section, pick an `Ubuntu` Base 
4) For Instance type leave at the default or pick a free tier
5) For `key pair (login)` select Create a key pair and generate an RSA key, save as a .ppk for PuTTY
6) In Network Settings, `create security groups` to modify who can access the deployed instance
   To edit inbound rules - hit edit inbound rules
    the security group should contain: 
    - Type: HTTP - 0.0.0.0/0 to allow anyone to visit and use the site
    - Type: SSH - who can access the build through SSH key 
        note: if you only want 1 person to access, select My IP and enter the IP address
    - Type: Custom TCP - The port that the server runs on (ex: 5000, 8000, etc.)
7) We used default option for everything else, made 1 instance and hit `Launch instance`
8) After a few minutes the Status Check should be 2/2 checks passed
8) Hit `Connect` to connect to the instance
9) use `SSH Client` to connect with SSH

# Connect to the EC2 VM with PuTTY #
10) In the PuTTY window, put connection type to SSH
In the `Host Name` field enter: ubuntu@<IP address>
11) On the left side there is a section with `SSH` -> `Auth` and load in the private key file 
12) Make sure to go back to the `Session` tab, name your session and save it 
13) Now, you should be able to login to your virtual machine!

`What you need on the VM`
- Install Node Version 20
- Install mongodb (Note: can use cloud service instead, we opted to just install it directly)
- Clone down the org's repository (make sure to do npm install)
- Set up the .env file
- Run the build script and run the server
- Install PM2 and use the 'run' script file path

DONE! This is not a continuous deployment, so any changes will need to be pulled down into the 
deployed instance 

Helpful docs:
([MongoDB]https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
([PM2](https://pm2.keymetrics.io/))

Helpful video links:
([AWS EC2](https://www.youtube.com/watch?v=YH_DVenJHII))
([PuTTY](https://www.youtube.com/watch?v=051Jdka8piY))


## Environmental Variables
In this repo, you'll find a file called .env-example. Be sure to copy this file as .env. In the newly created .env, you'll enter the following:
- `GOOGLE_CLIENT_ID` : The client ID from your Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` : The client secret from your Google OAuth Client ID
- `SESSION_SECRET` : A hard to guess secret string for your Express sessions.
- `DOMAIN_NAME` : The domain name of your server. If your using a local development environment, I suggest putting 127.0.0.1.
- `PORT` : The port defaults to 8000 if this isn't here, but if you'd like to use a different port, you can put it here.

## File Structure

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
        - The key(s) should match the fields in the Games collection to set a filter
  - DELETE `/:id`
    - Removes the game from the database using the _id from the game object.
  - PATCH `/:id`
    - Updates the game from the database using the _id from the game object.
    - Must send an object in the request body:
      - `{ game: { fields } }`
        - The key(s) should match the fields in the Games collection to update the fields for the game object using the values attached to the keys.
- `/api/game-nights` : This route holds all interactions with the GameNights collection.
  - GET `/`
    - Sends back the user's game nights they planned
  - POST `/`
    - Creates a game night object for a user in the database
    - Must send an object in the request body:
      - `{ formValues: { fields } }`
        - The key(s) should match the fields in the GameNights collection to properly create and store the object
  - DELETE `/:id`
    - Removes the game night from the database using the _id from the game night object.
  - PATCH `/:id`
    - Updates the game from the database using the _id from the game object.
    - Must send an object in the request body:
      - `{ newDocument: { fields } }`
        - The key(s) should match the fields in the GameNights collection to update the fields for the game night object using the values attached to the keys.
- `/api/groups` : This route holds all interactions with the Groups collection.
  - POST `/`
    - Creates a group object for a user in the database
    - Must send an object in the request body:
      - `{ groups: { fields } }`
        - The key(s) should match the fields in the Groups collection to properly create and store the object
  - GET `/`
    - Sends back the user's groups they put together
  - DELETE `/:id`
    - Removes the group from the database using the _id from the group object.
  - PATCH `/:id`
    - Updates the group from the database using the _id from the group object.
    - Must send an object in the request body:
      - `{ groups: { fields } }`
        - The key(s) should match the fields in the Groups collection to update the fields for the group object using the values attached to the keys.
- `/logout` : This endpoint logs the user out of their current session and clears their cookie.
- `*` : This endpoint facilitates all React-Router requests to the server. Using a custom verifySession middleware to check that a user has signed in properly to be able to navigate the site.

### Database Schemas
We are using MongoDB with the Mongoose ODM. You can find schemas in the `./src/server/database/models` directory. At this moment, we have the following collections:
- Users
  - name
  - googleId
  - email
- Games
  - Data From Board Game Geeks:
    - bggId (Board Game Geeks)
    - name
    - thumbnail
    - image (bigger version of the thumbnail most of the time)
    - description
    - yearPublished
    - minPlayers
    - maxPlayers
    - bestWith
    - recommendedWith
    - playTime
    - minAge
    - categories
    - mechanics
  - Other fields not from BGG
    - user (should be the _id from the user object)
    - notes
    - rating
- GameNights
  - name
  - user (should be the _id from the user object)
  - fullDate (date)
  - date (string)
  - time (string)
  - isComplete
  - isCancelled
  - guests (Array of Strings)
  - snacks (Array of Strings)
  - games (Array of Strings)
  - winner
- Groups
  - name
  - players (Array of Strings)
  - user (should be the _id from the user object)

## Current Bugs
- When editing the Game Night name, the accordion opens and closes with the spacebar.

## Future Development & Improvements
- Be able to add more guests, snacks, and games to a game night when editing.
- Be able to edit the winner for a game night.
- Allow users to put times in regular time rather than military time.
- Add functionality to the buttons in the Groups and Current Game views
- Add more assist features for the current game view

## Contributors
- [Awesome Person Interface](https://github.com/Awesome-Person-Interface)
  - Evan Loria ([evanloria4](https://github.com/evanloria4))
  - Stefan Poole ([steviepee](https://github.com/steviepee))
  - Tyler Meyer ([tymey](https://github.com/tymey))

# Legacy #
- ([4L00P](https://github.com/4L00P))
- Ava Alley ([avaAlley](https://github.com/avaAlley))
- Joseph Furman ([joespaf](https://github.com/joespaf))
- Ryan Simien ([RRARI504](https://github.com/RRARI504))
- Yume Jensen ([yumejensen](https://github.com/yumejensen))