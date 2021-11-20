const Customer = require('./customersModel');
const catchAsync = require('../error/catchAsync');

// const APIFeatures = require('../utils/apiFeatures');

exports.getAllCustomer = catchAsync(async (req, res, next) => {
  const doc = await Customer.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: doc,
  });
});

exports.create = catchAsync(async (req, res) => {
  const doc = await Customer.create();

  res.status(200).json({
    data: doc,
  });
});
