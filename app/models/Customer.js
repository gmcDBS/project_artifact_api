var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    customerId: String
});
mongoose.model('Customer', CustomerSchema);
module.exports = mongoose.model('Customer');
