const userController = require('../controllers/userController');
const router = require('express').Router();

router.post('/create', userController.create);
router.post('/login', userController.finUserByEmailAndPassword);
router.post('/update/:id', userController.update);
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.delete('/:id', userController.delete);

module.exports = router;