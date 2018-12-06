var mongoose = require('mongoose');
var DeviceSchema = new mongoose.Schema({
    deviceId: String,
    deviceImage: String,
    deviceType: String,
    deviceModel: String,
    deviceBrand: String
});
mongoose.model('Device', DeviceSchema);
module.exports = mongoose.model('Device');
