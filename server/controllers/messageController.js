import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import openai from "../config/openai.js";
import axios from "axios";
import imagekit from "../config/imagekit.js";

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

export const imageMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { prompt, chatId, isPublished } = req.body;
    // Credit check
    if (req.user.credits < 2) {
      return res.status(400).json({
        success: false,
        message: "You don't have enough credits to use this feature.",
      });
    }

    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found.",
      });
    }

    // Add user message to chat
    chat.messages.push({
      role: "user",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    // Generate image via ImageKit transformation URL
    const encodedPrompt = encodeURIComponent(prompt);
    const generateImageUrl = `${
      process.env.IMAGEKIT_URL_ENDPOINT
    }/ik-genimg-prompt-${encodedPrompt}/chatify/${Date.now()}.png?tr=w-800,h-800`;

    const aiImageResponse = await axios.get(generateImageUrl, {
      responseType: "arraybuffer",
    });

    const base64Image = `data:image/png;base64,${Buffer.from(
      aiImageResponse.data,
      "binary"
    ).toString("base64")}`;

    // Upload generated image to ImageKit
    const uploadResponse = await imagekit.upload({
      file: base64Image,
      fileName: `${Date.now()}.png`,
      folder: "/chatify",
    });

    const reply = {
      role: "assistant",
      content: uploadResponse.url,
      timestamp: Date.now(),
      isImage: true,
      isPublished: !!isPublished,
    };

    // Send image reply to frontend
    res.status(200).json({
      success: true,
      reply,
    });

    // Save AI message and deduct credits
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -2 } });
  } catch (error) {
    console.error("❌ Error in imageMessageController:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};
