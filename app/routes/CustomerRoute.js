var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var customerController = require('../controllers/CustomerController');

router.get('/test', customerController.getTest);

router.get('/', customerController.getCustomers);
router.get('/:_id', customerController.getCustomer);
router.post('/', customerController.createCustomer);
router.put('/:_id', customerController.updateCustomer);
router.delete('/:_id', customerController.removeCustomer);

module.exports = router;