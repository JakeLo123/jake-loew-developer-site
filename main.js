const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

// app.get('/', (req, res) => {});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
