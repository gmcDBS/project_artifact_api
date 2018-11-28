var express = require('express');
var app = express();
var db = require('./mongodb');

var RepairRoute = require('./app/routes/RepairRoute');
var DeviceRoute = require('./app/routes/DeviceRoute');
var CustomerRoute = require('./app/routes/CustomerRoute');

app.use('/*',function(req, res, next) {

   res.setHeader('Access-Control-Allow-Origin', '*');

   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

   res.setHeader('Access-Control-Allow-Credentials', true);

   next();

});

app.use('/repair', RepairRoute);
app.use('/device', DeviceRoute);
app.use('/customer', CustomerRoute);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});

module.exports = app;
