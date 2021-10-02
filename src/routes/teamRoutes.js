const teamController = require('../controllers/teamController');
const router = require("express").Router();

router.get("/:id", teamController.findById);
router.get("/user/:userId", teamController.findByUserId);
router.post("/add", teamController.addNewPoke);

module.exports = router;