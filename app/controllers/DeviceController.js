'use strict';
var Device = require('../models/Device');

exports.getTest = function (req, res) {
        var name = req.query.name || "Steve";
        res.status(200).send("It works, " + name + "!");
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

app.put('/api/:company', function (req, res) {
    var company = req.company;

    company = _.extend(company, req.body);

    company.save(function(err) {
    if (err) {
        return res.send('/company', {
            errors: err.errors,
            company: company
        });
    } else {
        res.jsonp(company);
    }

});

.delete( function (req, res) {     // <===== defined inside 'put',
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err) return res.send(err);
            res.json({ message: 'Deleted' });
        });
    });
*/
