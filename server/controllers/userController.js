import User from "../models/user.model.js";

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

    const User = User.create({
      name,
      email,
      password,
    });

    return res.json({
      success: true,
      message: "User created",
      User,
    });
  } catch (error) {}
};
