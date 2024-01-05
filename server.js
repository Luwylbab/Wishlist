const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});