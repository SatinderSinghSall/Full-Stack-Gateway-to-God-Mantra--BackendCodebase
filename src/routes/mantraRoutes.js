const express = require("express");
const router = express.Router();

const {
  getMantras,
  getMantraBySlug,
} = require("../controllers/mantraController");

router.get("/", getMantras);
router.get("/:slug", getMantraBySlug);

module.exports = router;
