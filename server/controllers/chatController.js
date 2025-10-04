import Chat from "../models/chat.model.js";


export const createChat = async (req, res)=> {
    try {
        const userId = req.user._id;

        const chatData = {
            userId,
            userName: req.user.name,
            name: "New Chat",
            messages: []
        }

        await Chat.create(chatData)
        res.status(200).json({success: true, message: "Chat created"})
    } catch (error) {
       return res.status(500).json({
        success: false,
        message: error.message
       })  
    } 
}