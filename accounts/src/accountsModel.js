const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  account_id: Number,
  limit: Number,
  products: [],
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;
