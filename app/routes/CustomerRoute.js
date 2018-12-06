var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var customerController = require('../controllers/CustomerController');

router.get('/test', customerController.getTest);

router.get('/', customerController.getCustomers);
//router.get('/:customerId', customerController.getCustomer);
router.post('/', customerController.createCustomer);
//router.put('/:customerId', customerController.updateCustomer);
//router.delete('/:customerId', customerController.removeCustomer);

module.exports = router;