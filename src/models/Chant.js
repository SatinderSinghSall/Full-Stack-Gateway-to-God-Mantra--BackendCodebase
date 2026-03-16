const mongoose = require("mongoose");

const chantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  mantra: {
    type: String,
  },

  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Chant", chantSchema);
