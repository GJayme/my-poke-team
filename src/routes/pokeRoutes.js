const pokeController = require('../controllers/pokeController');
const router = require("express").Router();

router.get("/", pokeController.findOne)

module.exports = router;