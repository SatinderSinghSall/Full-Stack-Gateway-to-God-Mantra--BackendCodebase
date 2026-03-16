const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema({
  verse: String,
  meaning: String,
  order: Number,
});

const mantraSchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  verses: [verseSchema],
});

module.exports = mongoose.model("Mantra", mantraSchema);
