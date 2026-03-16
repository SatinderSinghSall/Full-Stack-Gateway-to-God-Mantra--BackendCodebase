const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/authRoutes");
const mantraRoutes = require("./src/routes/mantraRoutes");
const chantRoutes = require("./src/routes/chantRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Gateway to God - Mantras API Running & Live. 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/mantras", mantraRoutes);
app.use("/api/chants", chantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
