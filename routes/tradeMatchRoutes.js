const router = require('express').Router();
const ctrl = require('../controllers/tradeMatchController');

router.post('/', ctrl.createMatch);
router.get('/', ctrl.getAll);

module.exports = router;