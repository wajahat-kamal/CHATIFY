import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

export const message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide a message text.",
      });
    }

    const userMsg = await User.create({
      sender: "user",
      text: text.trim(),
    });

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(text.trim());
    const geminiReply = result.response.text();
    
    const botMsg = await Bot.create({
      sender: "bot",
      text: geminiReply,
    });

    return res.status(201).json({
      success: true,
      userMessage: userMsg.text,
      botReply: botMsg.text,
    });

  } catch (error) {
    console.error("Error handling message:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};
