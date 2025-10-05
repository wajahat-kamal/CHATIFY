import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import openai from "../config/openai.js";
import "dotenv/config";

export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;

    // Credit check
    if (req.user.credits < 1) {
      return res.status(400).json({
        success: false,
        message: "You don't have enough credits to use this feature.",
      });
    }

    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found.",
      });
    }

    // Add user's message to chat
    chat.messages.push({
      role: "user",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    // Generate AI response (Gemini model)
    const completion = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{ role: "user", content: prompt }],
    });

    const aiMessage =
      completion.choices?.[0]?.message?.content ||
      "I'm not sure how to respond.";

    const reply = {
      role: "assistant",
      content: aiMessage,
      isImage: false,
      timestamp: Date.now(),
    };

    // Send AI response to client immediately
    res.status(200).json({
      success: true,
      reply,
    });

    // Save both messages in DB
    chat.messages.push(reply);
    await chat.save();

    // Deduct one credit from user
    await User.updateOne({ _id: userId }, { $inc: { credits: -1 } });
  } catch (error) {
    console.error("❌ Error in textMessageController:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};

