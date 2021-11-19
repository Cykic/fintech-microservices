const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;
