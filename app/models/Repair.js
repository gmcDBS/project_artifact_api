var mongoose = require('mongoose');
var RepairSchema = new mongoose.Schema({
    repairId: String
});
mongoose.model('Repair', RepairSchema);
module.exports = mongoose.model('Repair');
