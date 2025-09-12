const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  limit: { type: Number, required: true },
  month: { type: String, required: true }, // e.g., "2025-09"
});

module.exports = mongoose.model("Budget", BudgetSchema);
