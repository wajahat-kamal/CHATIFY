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
    const userId = req.user._id;

    const chats = await Chat.find({ userId }).sort({ updatedAt: -1 });

    return res.status(200).json({
      success: true,
      chats,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteChat = async (req, res) => {
    try {
      const userId = req.user._id;
      const {chatId} = req.body;
  
      await Chat.deleteOne({ _id: chatId, userId });
  
      return res.status(200).json({
        success: true,
        message: "Chat deleted"
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };