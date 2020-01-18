const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/api/message', (req, res) => {
  console.log('got to post route: ', req.body);
  const output = `
  <h4>new message from your portfolio site</h4>
  <ul>
      <li>full name: ${req.body.fullName}</li>
      <li>email: ${req.body.email}</li>
  </ul>
  <h4>message:</h4>
  <p>${req.body.message}</p>`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'nodemailer1991@gmail.com',
      pass: process.env.NODEMAILER_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    from: req.body.email,
    to: 'jakeloew1@gmail.com',
    text: req.body.content,
    html: output,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error sending email...', error);
    } else {
      console.log('message info...', info);
      res.sendStatus(200);
    }
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
