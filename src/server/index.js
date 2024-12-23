const path = require('path');
const dotenv = require('dotenv');
const database = require('./database');

// Loads the .env information into process.env (Do this before requiring app)
// This is how we'll hide our .env info

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const { app } = require('./app');

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://127.0.0.1:${PORT}`);
  console.log(`Server listening at http://localhost:${PORT}`);
});