var mongoose = require('mongoose');
var DeviceSchema = new mongoose.Schema({
    deviceId: String
});
mongoose.model('Device', DeviceSchema);
module.exports = mongoose.model('Device');
