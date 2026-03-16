const Mantra = require("../models/Mantra");

exports.getMantras = async (req, res) => {
  const mantras = await Mantra.find();

  res.json(mantras);
};

exports.getMantraBySlug = async (req, res) => {
  const mantra = await Mantra.findOne({
    slug: req.params.slug,
  });

  res.json(mantra);
};
