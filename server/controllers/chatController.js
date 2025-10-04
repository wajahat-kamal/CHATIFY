import Chat from "../models/chat.model.js";

export const createChat = async (req, res) => {
  try {
    const userId = req.user._id;

    const chatData = {
      userId,
      userName: req.user.name,
      name: "New Chat",
      messages: [],
    };

    const newChat = await Chat.create(chatData);

    return res.status(201).json({
      success: true,
      message: "Chat created successfully",
      chat: newChat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getChats = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}