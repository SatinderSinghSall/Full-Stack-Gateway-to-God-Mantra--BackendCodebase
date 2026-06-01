const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        code: "MISSING_FIELDS",
        message: "All fields are required.",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({
        code: "EMAIL_ALREADY_EXISTS",
        message: "An account already exists with this email.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        code: "WEAK_PASSWORD",
        message: "Password must be at least 6 characters.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      code: "SERVER_ERROR",
      message: "Something went wrong. Please try again later.",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Account doesn't exist
    if (!user) {
      return res.status(404).json({
        code: "ACCOUNT_NOT_FOUND",
        message: "No account found with this email address.",
      });
    }

    // Wrong password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        code: "INVALID_PASSWORD",
        message: "Incorrect password. Please try again.",
      });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      code: "SERVER_ERROR",
      message: "Something went wrong. Please try again later.",
    });
  }
};

exports.getMe = async (req, res) => {
  res.json(req.user);
};
