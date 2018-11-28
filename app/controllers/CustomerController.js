'use strict';
var Customer = require('../models/Customer');

exports.getTest = function (req, res) {
    res.status(200).send("It works!");
}

exports.getCustomers = function (req, res) {
    Customer.find({}, function (err, customers) {
        if (err) return res.status(500).send("problem GET Customers.");
        res.status(200).send(customers);
    });
}

exports.createCustomer = function (req, res) {
    Customer.create({
            customerId: req.body.customerId
        },
        function (err, customer) {
            if (err) return res.status(500).send("problem POST Customer.");
            res.status(200).send(customer);
        });
}

/*
exports.updateCustomer = function (req, res) {
    Customer.create({
            customerId: req.body.customerId
        },
        function (err, customer) {
            if (err) return res.status(500).send("problem PUT Customer.");
            res.status(200).send(customer);
        });
}

exports.removeCustomer = function (req, res) {
    Customer.create({
            customerId: req.body.customerId
        },
        function (err, customer) {
            if (err) return res.status(500).send("problem DELETE Customer.");
            res.status(200).send(customer);
        });
}
*/
