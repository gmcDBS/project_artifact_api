var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var deviceController = require('../controllers/DeviceController');

router.get('/test', deviceController.getTest);

router.get('/', deviceController.getDevices);
router.get('/:_id', deviceController.getDevice);
router.post('/', deviceController.createDevice);
router.put('/:_id', deviceController.updateDevice);
router.delete('/:_id', deviceController.removeDevice);

module.exports = router;