'use strict';
var Device = require('../models/Device');

exports.getTest = (req, res) => {
	var name = req.query.name || "Steve";
	res.status(200).send("It works, " + name + "!");
}

exports.getDevices = (req, res) => {
	Device.find().then(devices => {
		res.send(devices);
	})
}

exports.getDevice = (req, res) => {
	Device.findById(req.params._id).then(device => {
		if (!device) {
			return res.status(404).send({
				message: "Device not found with id " + req.params._id
			});
		}
		res.send(device);
	})
}

exports.createDevice = (req, res) => {
	var {
		deviceId,
		deviceImage,
		deviceType,
		deviceModel,
		deviceBrand
	} = req.body;

	Device.create({
			deviceId,
			deviceImage,
			deviceType,
			deviceModel,
			deviceBrand
		},
		function (err, device) {
			if (err) return res.status(500).send("problem POST Device.");
			res.status(200).send(device);
		});
}

exports.updateDevice = (req, res) => {
	var {
		deviceId,
		deviceImage,
		deviceType,
		deviceModel,
		deviceBrand
	} = req.body;

	Device.findByIdAndUpdate(req.params._id, {
		deviceId,
		deviceImage,
		deviceType,
		deviceModel,
		deviceBrand
	}, {
		new: true
	}).then(device => {
		if (!device) {
			return res.status(404).send({
				message: "Device not found with id " + req.params._id
			});
		}
		res.send(device);
	});
}

exports.removeDevice = (req, res) => {
	Device.findByIdAndRemove(req.params._id).then(device => {
		if (!device) {
			return res.status(404).send({
				message: "Device not found with id " + req.params._id
			});
		}
		res.send({
			message: "Device deleted successfully!"
		});
	});
}
