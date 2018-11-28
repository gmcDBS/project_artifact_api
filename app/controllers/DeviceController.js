'use strict';
var Device = require('../models/Device');

exports.getTest = function (req, res) {
        res.status(200).send("It works!");
}

exports.getDevices = function (req, res) {
    Device.find({}, function (err, devices) {
        if (err) return res.status(500).send("problem GET Repairs.");
        res.status(200).send(devices);
    });
}

exports.createDevice = function (req, res) {
    Device.create({
            deviceId: req.body.deviceId
        },
        function (err, device) {
            if (err) return res.status(500).send("problem POST Device.");
            res.status(200).send(device);
        });
}

/*
exports.updateDevice = function (req, res) {
    Device.create({
            deviceId: req.body.deviceId
        },
        function (err, device) {
            if (err) return res.status(500).send("problem PUT Device.");
            res.status(200).send(device);
        });
}

exports.removeDevice = function (req, res) {
    Device.create({
            deviceId: req.body.deviceId
        },
        function (err, device) {
            if (err) return res.status(500).send("problem DELETE Device.");
            res.status(200).send(device);
        });
}
*/
