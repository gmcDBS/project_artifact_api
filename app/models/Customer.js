var Repair = require('./Repair.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
    customerId: String,
    customerName: String,
    customerAddress: String,
    customerContact: String,
    repairs: [{ type: Schema.Types.ObjectId, ref: 'Repair' }]
}, {
    timestamps: true
});

mongoose.model('Customer', CustomerSchema);
module.exports = mongoose.model('Customer');
