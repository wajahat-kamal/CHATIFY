import User from "../models/user.model.js";

export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { chatId, prompt } = req.body;

    const chat = await User.findOne({ userId, _id: chatId });
    chat.messages.push({
      role: "User",
      isImage: false,
      timestamp: Date.now(),
      content: prompt,
    });

    const { choice } = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = {
      ...choice.messages[0],
      isImage: false,
      timestamp: Date.now(),
    };

    res.json({
        success: true,
        reply
    })

    chat.messages.push(replay)
    await chat.save();

    await User.updateOne({_id: userId}, {$inc: {credits: -1}})

  } catch (error) {}
};
