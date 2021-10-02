const express = require("express");
const router = express.Router();

const userRoute = require('./userRoutes');
const teamRoute = require('./teamRoutes');
const pokeRoute = require('./pokeRoutes');

router.use('/api/v1/users', userRoute);
router.use('/api/v1/teams', teamRoute);
router.use('/api/v1/poke', pokeRoute);

module.exports = router