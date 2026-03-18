const Mantra = require("../models/Mantra");

const createMantra = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const mantra = await Mantra.create({
      title,
      content,
      user: req.user.id,
    });

    res.status(201).json(mantra);
  } catch (err) {
    res.status(500).json({ message: "Failed to create mantra" });
  }
};

const getUserMantras = async (req, res) => {
  try {
    const mantras = await Mantra.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(mantras);
  } catch (err) {
    res.status(500).json({ message: "Error fetching mantras" });
  }
};

const updateMantra = async (req, res) => {
  try {
    const { title, content } = req.body;

    const mantra = await Mantra.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      { title, content },
      { new: true },
    );

    if (!mantra) {
      return res.status(404).json({ message: "Mantra not found" });
    }

    res.json(mantra);
  } catch (err) {
    res.status(500).json({ message: "Failed to update mantra" });
  }
};

const deleteMantra = async (req, res) => {
  try {
    const mantra = await Mantra.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!mantra) {
      return res.status(404).json({ message: "Mantra not found" });
    }

    res.json({ message: "Mantra deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete mantra" });
  }
};

module.exports = {
  createMantra,
  getUserMantras,
  updateMantra,
  deleteMantra,
};
