const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors')
require('./db.js');
const {CORS_URL} = process.env

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CORS_URL); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/api', routes); //api/*

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// deploy
// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   server.use(express.static(path.join(__dirname, '../../client/build')));
// // Handle React routing, return all requests to React app
//   server.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
//   });
// }

// ** MIDDLEWARE ** //
// const whitelist = ['http://localhost:3001', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku...']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// server.use(cors(corsOptions))


module.exports = server;
