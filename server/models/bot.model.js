import mongoose from "mongoose";
 
const botSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
        enum: ["bot"]
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Bot = mongoose.model("Bot", botSchema)
export default Bot;