const express = require('express');
const bodyParser = require('body-parser');
const monsters_local = require('./routes/monsters_local');
const habitats_local = require('./routes/habitats_local');
const monsters_heroku = require('./routes/monsters_heroku');
const habitats_heroku = require('./routes/habitats_heroku');

const app = express();

app.use(bodyParser.json());
app.use('/monsters_local', monsters_local);
app.use('/habitats_local', habitats_local);
app.use('/monsters_heroku', monsters_heroku);
app.use('/habitats_heroku', habitats_heroku);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;