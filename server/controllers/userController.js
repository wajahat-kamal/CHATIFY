import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("❌ Error in registerUser:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        credits: user.credits,
      },
    });
  } catch (error) {
    console.error("❌ Error in loginUser:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

export const getUser = (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({ success: true, user });
  } catch (error) {}
};
