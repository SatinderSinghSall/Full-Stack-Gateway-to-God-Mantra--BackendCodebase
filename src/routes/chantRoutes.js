const express = require("express");
const router = express.Router();

const { incrementChant, getChants } = require("../controllers/chantController");

const { protect } = require("../middleware/authMiddleware");

router.post("/increment", protect, incrementChant);
router.get("/", protect, getChants);

module.exports = router;
