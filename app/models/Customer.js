var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    customerId: String,
    customerName: String,
    customerAddress: String,
    customerContact: String
//    customerDevice: String,
});
mongoose.model('Customer', CustomerSchema);
module.exports = mongoose.model('Customer');
