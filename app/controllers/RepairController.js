'use strict';
var Repair = require('../models/Repair');

exports.getTest = (req, res) => {
    var name = req.query.name || "Bruce";
    res.status(200).send("It works, " + name + "!");
}

exports.getRepairs = (req, res) => {
    Repair.find().populate('device').then(repairs => {
        res.send(repairs);
    })
}

exports.getRepair = function (req, res) {
    Repair.findById(req.params._id).populate('device').then(repair => {
        if (!repair) {
            return res.status(404).send({
                message: "Repair not found with id " + req.params._id
            });
        }
        res.send(repair);
    })
}

exports.createRepair = (req, res) => {
    var {
        repairId,
        repairType,
        repairStatus,
        device
    } = req.body;
    
    Repair.create({
            repairId,
            repairType,
            repairStatus,
            device
        },
        function (err, repair) {
            if (err) return res.status(500).send("problem POST Repair.");
            res.status(200).send(repair);
        });
}

exports.updateRepair = (req, res) => {
    var {
        repairId,
        repairType,
        repairStatus,
		device
    } = req.body;

    Repair.findByIdAndUpdate(req.params._id, {
        repairId,
        repairType,
        repairStatus,
		device
    }, {
        new: true
    }).then(repair => {
        if (!repair) {
            return res.status(404).send({
                message: "Repair not found with id " + req.params._id
            });
        }
        res.send(repair);
    });
}

exports.removeRepair = (req, res) => {
    Repair.findByIdAndRemove(req.params._id).then(repair => {
        if (!repair) {
            return res.status(404).send({
                message: "Repair not found with id " + req.params._id
            });
        }
        res.send({
            message: "Repair deleted successfully!"
        });
    });
}
