const router = require('express').Router();
const ctrl = require('../controllers/userController');

router.post('/register', ctrl.register);
router.get('/', ctrl.getAll);

module.exports = router;