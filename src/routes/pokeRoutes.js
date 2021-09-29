const pokeController = require('../controllers/pokeController');
const router = require("express").Router();

router.get("/", pokeController.findOne)
router.get("/page/:paginate", pokeController.getPokePaginated)

module.exports = router;