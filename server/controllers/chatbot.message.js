import User from "../models/user.model.js";

export const message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide a message text.",
      });
    }

    await User.create({
      sender: "user",
      text,
    });
  } catch (error) {
    console.error("Error saving message:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};
