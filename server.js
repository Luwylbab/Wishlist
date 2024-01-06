const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
