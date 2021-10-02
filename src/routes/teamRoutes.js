const teamController = require('../controllers/teamController');
const router = require("express").Router();

router.get("/:id", teamController.findById);
router.delete("/:id", teamController.deleteTeam);
router.get("/user/:userId", teamController.findByUserId);
router.post("/create", teamController.createNewTeam);
router.post("/add", teamController.addNewPoke);
router.post("/removePoke", teamController.removePoke);

module.exports = router;