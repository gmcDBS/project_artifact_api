var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var repairController = require('../controllers/RepairController');

router.get('/test', repairController.getTest);

router.get('/', repairController.getRepairs);
router.get('/:_id', repairController.getRepair);
router.post('/', repairController.createRepair);
router.put('/:_id', repairController.updateRepair);
router.delete('/:_id', repairController.removeRepair);

module.exports = router;