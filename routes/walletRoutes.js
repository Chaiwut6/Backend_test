const router = require('express').Router();
const ctrl = require('../controllers/walletController');

router.get('/', ctrl.getAll);

module.exports = router;