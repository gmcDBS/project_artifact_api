var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var repairController = require('../controllers/RepairController');

router.get('/test', repairController.getTest);

router.get('/', repairController.getRepairs);
//router.get('/', repairController.getRepair);
router.post('/', repairController.createRepair);
//router.put('/', repairController.updateRepair);
//router.delete('/', repairController.removeRepair);

module.exports = router;