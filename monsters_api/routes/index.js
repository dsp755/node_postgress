const { Router } = require('express');

const monsters_local = require('./monsters_local');
const habitats_local = require('./habitats_local');
const lives_local = require('./lives_local');
const lives_heroku = require('./lives_heroku');
const monsters_heroku = require('./monsters_heroku');
const habitats_heroku = require('./habitats_heroku');

const router = Router();

router.use('/monsters_local', monsters_local);
router.use('/habitats_local', habitats_local);
router.use('/lives_local', lives_local);
router.use('/lives_heroku', lives_heroku);
router.use('/monsters_heroku', monsters_heroku);
router.use('/habitats_heroku', habitats_heroku);

module.exports = router;