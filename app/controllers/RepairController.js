'use strict';
var Repair = require('../models/Repair');

exports.getTest = function (req, res) {
        res.status(200).send("It works!");
}

exports.getRepairs = function (req, res) {
    Repair.find({}, function (err, repairs) {
        if (err) return res.status(500).send("problem GET Repairs.");
        res.status(200).send(repairs);
    });
}

exports.createRepair = function (req, res) {
    Repair.create({
            repairId: req.body.repairId
        },
        function (err, repair) {
            if (err) return res.status(500).send("problem POST Repair.");
            res.status(200).send(repair);
        });
}


/*
exports.updateRepair = function (req, res) {
    Repair.create({
            repairId: req.body.repairId
        },
        function (err, repair) {
            if (err) return res.status(500).send("problem PUT Repair.");
            res.status(200).send(repair);
        });
}

exports.removeRepair = function (req, res) {
    Repair.create({
            repairId: req.body.repairId
        },
        function (err, repair) {
            if (err) return res.status(500).send("problem DELETE Repair.");
            res.status(200).send(repair);
        });
}
*/
