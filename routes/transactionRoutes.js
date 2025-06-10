const router = require('express').Router();
const ctrl = require('../controllers/transactionController');

router.post('/', ctrl.createTransaction);
router.get('/', ctrl.getAll);

module.exports = router;
