const router = require('express').Router();
const ctrl = require('../controllers/tradeOrderController');

router.post('/', ctrl.createOrder);
router.get('/', ctrl.getAll);

module.exports = router;