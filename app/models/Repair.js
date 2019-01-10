var Device = require('./Device.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairSchema = new mongoose.Schema({
    repairId: String,
    repairType: String,
    repairStatus: String,
    device: { type: Schema.Types.ObjectId, ref: 'Device' }
    
}, {
    timestamps: true
});
mongoose.model('Repair', RepairSchema);
module.exports = mongoose.model('Repair');
