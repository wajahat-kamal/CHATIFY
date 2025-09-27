import mongoose from "mongoose";
 
const botSchema = new mongoose.connect({
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