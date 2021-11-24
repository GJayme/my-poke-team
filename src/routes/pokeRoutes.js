const pokeController = require('../controllers/pokeController');
const router = require("express").Router();

router.post("/", pokeController.findOne)
router.get("/page/:paginate", pokeController.getPokePaginated)

module.exports = router;