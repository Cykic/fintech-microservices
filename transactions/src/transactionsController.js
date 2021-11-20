const Transaction = require('./transactionsModel');
const catchAsync = require('../error/catchAsync');

// const APIFeatures = require('../utils/apiFeatures');

exports.getAllTransaction = catchAsync(async (req, res, next) => {
  const doc = await Transaction.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: doc,
  });
});

exports.create = catchAsync(async (req, res) => {
  const doc = await Transaction.create();

  res.status(200).json({
    data: doc,
  });
});
