const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  upiId: String,
  status: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);