const express = require("express");
const router = express.Router();

const userRoute = require('./userRoutes');
const pokeRoute = require('./pokeRoutes');

router.use('/api/v1/users', userRoute);
router.use('/api/v1/poke', pokeRoute);

module.exports = router