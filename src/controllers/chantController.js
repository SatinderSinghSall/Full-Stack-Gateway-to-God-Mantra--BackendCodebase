const Chant = require("../models/Chant");

exports.incrementChant = async (req, res) => {
  const { mantra } = req.body;

  let chant = await Chant.findOne({
    userId: req.user._id,
    mantra,
  });

  if (!chant) {
    chant = await Chant.create({
      userId: req.user._id,
      mantra,
      count: 1,
    });
  } else {
    chant.count += 1;
    await chant.save();
  }

  res.json(chant);
};

exports.getChants = async (req, res) => {
  const chants = await Chant.find({
    userId: req.user._id,
  });

  res.json(chants);
};
