import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import openai from "../config/openai.js";
import axios from "axios";
import imagekit from "../config/imagekit.js";

export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found.",
      });
    }

    // Push user message
    chat.messages.push({
      role: "user",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    // Generate text reply from OpenAI (Gemini)
    const completion = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "assistant", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });

    const reply = {
      role: "assistant",
      content: completion.choices[0].message.content,
      isImage: false,
      timestamp: Date.now(),
    };

    // Send response to frontend
    res.status(200).json({
      success: true,
      reply,
    });

    // Save to DB and update user credits
    chat.messages.push(reply);
    await chat.save();

    await User.updateOne({ _id: userId }, { $inc: { credits: -1 } });
  } catch (error) {
    console.error("❌ Error in textMessageController:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};

export const imageMessageController = async (req, res) => {
  try {
    const userId = req.user._id;

    // Credit check
    if (req.user.credits < 2) {
      return res.status(400).json({
        success: false,
        message: "You don't have enough credits to use this feature.",
      });
    }

    const { prompt, chatId, isPublished } = req.body;

    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found.",
      });
    }

    // Push user message
    chat.messages.push({
      role: "user",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    // Image generation via ImageKit endpoint
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

    // Send response to frontend
    res.status(200).json({
      success: true,
      reply,
    });

    // Save to DB and update credits
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -2 } });
  } catch (error) {
    console.error("❌ Error in imageMessageController:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};
