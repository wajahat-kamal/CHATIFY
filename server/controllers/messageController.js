import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import openai from "../config/openai.js";

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

    chat.messages.push({
      role: "user",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    const completion = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });

    const reply = {
      ...completion.choices[0].message,
      isImage: false,
      timestamp: Date.now(),
    };

    res.status(200).json({
      success: true,
      reply,
    });

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
        if (req.user.credits < 2) {
            return res.json({
                success: false,
                message: "You don't have enough credits to use this feature"
            })
        }

        const {promp, chatId, isPublished} = req.body;
        const chat = await Chat.findOne({userId, _id: chatId})

        chat.messages.push({
            role: "user",
            isImage: false,
            timestamp: Date.now(),
            content: prompt,
          });
    } catch (error) {
        
    }
}