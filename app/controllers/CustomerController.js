'use strict';
var Customer = require('../models/Customer');

exports.getTest = (req, res) => {
	var name = req.query.name || "Tony";
	res.status(200).send("It works, " + name + "!");
}

exports.getCustomers = (req, res) => {
	Customer.find().populate({
		path: 'repairs',
		populate: {
			path: 'device',
			model: 'Device'
		}
	}).then(customers => {
		res.send(customers);
	})
}

exports.getCustomer = (req, res) => {
	Customer.findById(req.params._id).populate({
		path: 'repairs',
		populate: {
			path: 'device',
			model: 'Device'
		}
	}).then(customer => {
		if (!customer) {
			return res.status(404).send({
				message: "Customer not found with id " + req.params._id
			});
		}
		res.send(customer);
	})
}

exports.createCustomer = (req, res) => {

	var {
		customerId,
		customerName,
		customerAddress,
		customerContact,
		repairs
	} = req.body;

	Customer.create({
			customerId,
			customerName,
			customerAddress,
			customerContact,
			repairs
		},
		function (err, customer) {
			if (err) return res.status(500).send("problem POST Customer.");
			res.status(200).send(customer);
		});
}


exports.updateCustomer = (req, res) => {
	var {
		customerId,
		customerName,
		customerAddress,
		customerContact,
		repairs
	} = req.body;

	Customer.findByIdAndUpdate(req.params._id, {
		customerId,
		customerName,
		customerAddress,
		customerContact,
		repairs
	}, {
		new: true
	}).then(customer => {
		if (!customer) {
			return res.status(404).send({
				message: "Customer not found with id " + req.params._id
			});
		}
		res.send(customer);
	});
}

exports.removeCustomer = function (req, res) {
	Customer.findByIdAndRemove(req.params._id).then(customer => {
		if (!customer) {
			return res.status(404).send({
				message: "Device not found with id " + req.params._id
			});
		}
		res.send({
			message: "Device deleted successfully!"
		});
	});
}
