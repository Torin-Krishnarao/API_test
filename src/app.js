const express = require('express');
const routes = require('./routes/user.route'); // import the routes
const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

module.exports = app;