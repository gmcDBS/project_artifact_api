var mongoose = require('mongoose');
var DeviceSchema = new mongoose.Schema({
    deviceId: String,
    deviceImage: String,
    deviceType: String,
    deviceBrand: String,
    deviceModel: String
}, {
    timestamps: true
});
mongoose.model('Device', DeviceSchema);
module.exports = mongoose.model('Device');
