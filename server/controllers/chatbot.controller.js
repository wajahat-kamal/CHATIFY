import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export const message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide a message text.",
      });
    }

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(text);

    const output = result.response.text();

    return res.status(201).json({
      success: true,
      response: output,
    });
  } catch (error) {
    console.error("Error handling message:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};
