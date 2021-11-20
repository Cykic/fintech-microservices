const Account = require('./accountsModel');
const catchAsync = require('../error/catchAsync');

// const APIFeatures = require('../utils/apiFeatures');

exports.getAllAccount = catchAsync(async (req, res, next) => {
  const doc = await Account.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: doc,
  });
});

exports.create = catchAsync(async (req, res) => {
  const doc = await Account.create();

  res.status(200).json({
    data: doc,
  });
});
