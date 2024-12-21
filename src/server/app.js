const path = require('path');
const express = require('express');

const app = express();

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

app.use(express.static(DIST_DIR));

/**
 * If React-Router sends a request for a particular webpage, send the index.html in response
 */
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

module.exports = {
  app,
};
