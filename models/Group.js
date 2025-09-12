const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ name: String }],
  expenses: [
    {
      description: String,
      amount: Number,
      paidBy: String,
      splitType: { type: String, default: "equal" },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Group", GroupSchema);
