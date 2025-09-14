const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: String, required: true }], // Array of member names (strings)
  expenses: [
    {
      description: String,
      amount: Number,
      payer: String,
      split: { type: String, default: "equal" }, // match frontend field name
      date: { type: String }, // store as string to match frontend (or Date if you prefer)
    },
  ],
  settlements: [
    {
      from: String,
      to: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model("Group", GroupSchema);
