import User from "../models/user.model";


export const textMessageController = async (req, res) => {
    try {
        const userId = req.user._id;
        const {chatId, prompt} = req.body;

        const chat = await User.findOne({userId, _id: chatId})
        chat.messages.push({role: "User", isImage: false, timestamp: Date.now(), content: prompt})
    } catch (error) {
        
    }
}