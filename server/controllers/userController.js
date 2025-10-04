import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

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

    const user = User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    return res.json({
      success: true,
      message: "User created",
      token,
    });
  } catch (error) {}
};
