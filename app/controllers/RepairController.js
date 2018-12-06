'use strict';
var Repair = require('../models/Repair');

exports.getTest = function (req, res) {
    var name = req.query.name || "Bruce";
    res.status(200).send("It works, " + name + "!");
}

exports.getRepairs = function (req, res) {
    Repair.find({}, function (err, repairs) {
        if (err) return res.status(500).send("problem GET Repairs.");
        res.status(200).send(repairs);
    });
}

//exports.getRepair = function (req, res) {
//    Repair.find({}, function (err, repair) {
//        if (err) return res.status(500).send("problem GET Repair.");
//        res.status(200).send(repair);
//    });
//}

exports.createRepair = function (req, res) {
    Repair.create({
            repairId: req.body.repairId,
            repairType: req.body.repairType,
            repairStatus: req.body.repairStatus
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
