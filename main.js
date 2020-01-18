const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/api/message', (req, res) => {
  console.log('got to post route');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
