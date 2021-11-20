const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  Transaction_id: Number,
  limit: Number,
  products: [],
});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;
