const database = require('./database');
const { app } = require('./app');

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://127.0.0.1:${PORT}`);
  console.log(`Server listening at http://localhost:${PORT}`);
});