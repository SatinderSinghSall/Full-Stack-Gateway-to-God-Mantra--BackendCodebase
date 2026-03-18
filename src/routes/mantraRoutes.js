const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  createMantra,
  getUserMantras,
  updateMantra,
  deleteMantra,
} = require("../controllers/mantraController");

// 🔐 All routes protected
router.post("/", protect, createMantra);
router.get("/", protect, getUserMantras);
router.put("/:id", protect, updateMantra);
router.delete("/:id", protect, deleteMantra);

module.exports = router;
